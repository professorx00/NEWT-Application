//TODO: Product Search API
//TODO: Grab Fields from Index
//TODO: Pushback data

const apiKey = `c2bc6078cb1e4d29a1f16dc929782b86`;
const apiKey2 = '9b0c0f062fd744b29e02ffbea812b474 ';

let productIds = [];
let productData = {}

//document Jquery Items:

const product = $("#query");
const btn = $("#productSearchBtn");
const glist = $("#gList")
const results = $("#prodSearchResults")
const pForm = $("#productForm");


btn.on("click", (e) => {
    results.empty();
    productIds = [];
    console.log("clicked")
    e.preventDefault();
    item = product.val()
    queryProduct = `https://api.spoonacular.com/food/products/search?query=${item}&number=2&apiKey=${apiKey}`


    $.get(queryProduct, function () {

    }).then(function (apiData) {

        apiResults = apiData.products

        apiResults.forEach(element => {
            productIds.push(element.id);
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

addClick = function (event) {



    let title = $(event.target).attr("data-title");
    let id = $(event.target).attr("data-id");

    const newItem = $("<li>").attr("id", `${id}List`).append($("<button>").addClass("btn btn-dark listItem").attr("data-id", id).text(title));
    glist.append(newItem)
    $(`#${id}`).remove();
}

listItemBtn = function (event) {
    console.log("clicked List Item")
    id = $(event.target).attr("data-id")
    $(`#${id}List`).remove();
}

$(document).on("click", "button.productBtn", addClick);

$(document).on("click", "button.listItem", listItemBtn);

