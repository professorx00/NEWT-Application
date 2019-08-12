//TODO: Product Search API
//TODO: Grab Fields from Index
//TODO: Pushback data

const apiKey = `c2bc6078cb1e4d29a1f16dc929782b86`;
const apiKey2 = '9b0c0f062fd744b29e02ffbea812b474 ';

let productIds = [];
let productData ={}

//document Jquery Items:

const product = $("#query");
const btn = $("#productSearchBtn");
const glist =$("#gList")
const results=$("#prodSearchResults")




btn.on("click",(e)=>{
    console.log("clicked")
    e.preventDefault();
    item=product.val()
    console.log(item)
    queryProduct = `https://api.spoonacular.com/food/products/search?query=${item}&number=2&apiKey=${apiKey}`


    $.get(queryProduct, function () {

    }).then(function (apiData) {
    
        apiResults = apiData.products
        console.log(apiResults)
    
        apiResults.forEach(element => {
            productIds.push(element.id);
            // console.log(productId)
        });
        console.log(productIds)
    }).then(function(promise){
    
        productIds.forEach(element=>{
            let productID = element;
            queryProdInfo = `https://api.spoonacular.com/food/products/${productID}?${productID}&apiKey=${apiKey2}`
    
            $.get(queryProdInfo, function () {}).then(function(data){
                console.log(results)
                docNewDiv = $("<div>").attr("data-id", data.id).append($("<h1>").text(data.title)).append($("<p>").text(data.ingredientList))
                console.log(docNewDiv)
                docNutrition = $("<ul>")
                console.log(data.nutrition.calories)
                docCalories = $("<li>").text(`Calories: ${data.nutrition.calories}`)
                docCarbs = $("<li>").text(`Carbs: ${data.nutrition.carbs}`)
                docFat = $("<li>").text(`Fat: ${data.nutrition.fat}`)
                docProtein = $("<li>").text(`Protein: ${data.nutrition.protein}`)

                docNutrition.append(docCalories,docCarbs,docFat,docProtein)
                console.log(docNutrition)
                docNewDiv.append(docNutrition)

                results.append(docNewDiv)

                productData[data.id] = {
                    id: data.id,
                    title: data.title,
                    ingriendents: data.ingredientList,
                    nutrition:data.nutrition,
                    badges: data.badges
                }
            })
        })
    }).then(()=>{
        console.log(productData)
    })
});
