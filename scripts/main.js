var firebaseConfig = {
    apiKey: "AIzaSyDVpY3OhYYA8xAK3fti97EzGnAqKcgoVC4",
    authDomain: "cbc-nutrition.firebaseapp.com",
    databaseURL: "https://cbc-nutrition.firebaseio.com",
    projectId: "cbc-nutrition",
    storageBucket: "",
    messagingSenderId: "642726904018",
    appId: "1:642726904018:web:aeefcac3e06e052e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//Set Logged Out
let clicked = false;
//Set API Keys
const apiKey2 = '1b79143a851245a6a64983a4bd465f52';
const apiKey = `c2bc6078cb1e4d29a1f16dc929782b86`;
// const apiKey2 = '9b0c0f062fd744b29e02ffbea812b474 ';
// Set empty globals
let productIds = [];
let productTitles = [];
let productData = {};
let saveList = {};

//Set Document Elements
const product = $("#query");
const btn = $("#productSearchBtn");
const glist = $("#gList")
const results = $("#prodSearchResults")
const pForm = $("#productForm");
const minCal = $("#minCalories");
const maxCal = $("#maxCalories");

let listTitles = []
let listIds = []

// Main Button on Menu
const mealBtn = $("#mealBtn");
const productBtn = $("#productBtn")
mealBtn.on("click", e => {
    console.log("meal Plan Button Clicked")
    $("#foodFacts").addClass("hide");
    $("#productSearch").addClass("hide");
    $("#mealPlans").removeClass("hide").addClass("YYYYYEEAHH");
});
productBtn.on("click", e => {
    console.log("product Search Button Clicked")
    $("#foodFacts").addClass("hide");
    $("#productSearch").removeClass("hide");
    $("#mealPlans").addClass("hide");
});
//--------------------------->

//Product Page on Click Function
btn.on("click", (e) => {
    results.empty();
    productIds = [];
    console.log("clicked")
    e.preventDefault();
    item = product.val()
    minCalories = minCal.val().trim();
    maxCalories = maxCal.val().trim();

    if(minCalories && !maxCalories){
        queryProduct = `https://api.spoonacular.com/food/products/search?query=${item}&number=2&minCalories=${minCalories}&apiKey=${apiKey}`
    }
    else if(!minCalories && maxCalories){
        queryProduct = `https://api.spoonacular.com/food/products/search?query=${item}&number=2&maxCalories=${maxCalories}&apiKey=${apiKey}`
    }
    else if(minCalories && maxCalories){
        queryProduct = `https://api.spoonacular.com/food/products/search?query=${item}&number=2&maxCalories=${maxCalories}&minCalories=${minCalories}&apiKey=${apiKey}`
    }
    else{
        queryProduct = `https://api.spoonacular.com/food/products/search?query=${item}&number=2&apiKey=${apiKey}`
    }

    console.log(queryProduct)    


    $.get(queryProduct, function () {

    }).then(function (apiData) {

        apiResults = apiData.products

        apiResults.forEach(element => {
            productIds.push(element.id);
            // productTitles.push(element.title);
            // console.log(productId)
        });
    }).then(function (promise) {

        productIds.forEach(element => {
            let productID = element;
            queryProdInfo = `https://api.spoonacular.com/food/products/${productID}?${productID}&apiKey=${apiKey2}`

            $.get(queryProdInfo, function () { }).then(function (data) {
                // new Product Div with title,and ingrident
                docNewDiv = $("<div>").attr("data-id", data.id).attr("id", data.id).append($("<h1>").text(data.title)).append($("<p>").text(data.ingredientList))
                //nutrition List
                docProductBtn = $("<button>").addClass("productBtn btn btn-dark").text("Add").attr("data-title", data.title).attr("data-id", data.id)
                console.log(docProductBtn)
                docNutrition = $("<ul>")

                docCalories = $("<li>").text(`Calories: ${data.nutrition.calories}`)
                docCarbs = $("<li>").text(`Carbs: ${data.nutrition.carbs}`)
                docFat = $("<li>").text(`Fat: ${data.nutrition.fat}`)
                docProtein = $("<li>").text(`Protein: ${data.nutrition.protein}`)
                // appending list to nutriention list
                docNutrition.append(docCalories, docCarbs, docFat, docProtein)
                //Appending  nurtiention list to div
                docNewDiv.append(docNutrition)
                docNewDiv.append(docProductBtn)
                //append to page
                results.append(docNewDiv)

                productData[data.id] = {
                    id: data.id,
                    title: data.title,
                    ingriendents: data.ingredientList,
                    nutrition: data.nutrition,
                    badges: data.badges
                }
            })
            
        })
    }).then(() => {

    })
});
//product Page add Click Function
addClick = function (event) {
    let title = $(event.target).attr("data-title");
    let id = $(event.target).attr("data-id");
    listTitles.push(title);
    listIds.push(id)
    createListButton(id, title);
    $(`#${id}`).remove();

}
//Removes List Item from Page
listItemBtn = function (event) {
    console.log("clicked List Item")
    id = $(event.target).attr("data-id")
    title=$(event.target).attr("data-title")
    productIds.splice(productIds.indexOf(id),1)
    productTitles.splice(productTitles.indexOf(title),1)
    listTitles.splice(listTitles.indexOf(title),1)
    listIds.splice(listIds.indexOf(id),1)
    $(`#${id}List`).remove();
}



//Login status
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        const user = firebaseUser.email.split("@")[0]
        $("#user").text(firebaseUser.email)
        firebase.database().ref(`/user/${user}`).once("value",function(snapshot){
            // console.log(snapshot.val().idList, snapshot.val().list)
            ids = JSON.parse(snapshot.val().idList).listIds
            titles = JSON.parse(snapshot.val().titlelist).listTitles
            for(x=0;x<titles.length;x++){
                listTitles.push(titles[x])
                listIds.push(ids[x])
                createListButton(ids[x],titles[x]);
            }

        })
        
    }
    else {
        console.log("No User Login");
    }
});
// Log Out button
$("#logOut").on("click", e => {
    clicked = true
    if (clicked) {
        user = $("#user").text().split("@")[0]
        let list ={listTitles}
        let idList ={listIds}
        console.log(idList,list)
        firebase.database().ref(`/user/${user}`).update({'titlelist':JSON.stringify(list)})
        firebase.database().ref(`/user/${user}`).update({'idList':JSON.stringify(idList)})
        firebase.auth().signOut();
        window.location.href ="./index.html"
        clicked = false;
        }
      });
function createListButton(id, title) {
    const newItem = $("<li>").attr("id", `${id}List`).append($("<button>").addClass("btn btn-dark listItem").attr("data-id", id).attr("data-title", title).text(title));
    glist.append(newItem);
}
//global Listeners that check for List Button Events
$(document).on("click", "button.productBtn", addClick);
$(document).on("click", "button.listItem", listItemBtn);


//---> update the list 

