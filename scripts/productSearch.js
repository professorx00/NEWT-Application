//TODO: Product Search API

const apiKey = `c2bc6078cb1e4d29a1f16dc929782b86`;
let product='snickers';
let productIds = [];
let productData ={}

queryProduct = `https://api.spoonacular.com/food/products/search?query=${product}&number=2&apiKey=${apiKey}`


$.get(queryProduct, function () {

}).then(function (apiData) {

    results = apiData.products

    results.forEach(element => {
        productIds.push(element.id);
        // console.log(productId)
    });
    
}).then(function(promise){

    productIds.forEach(element=>{
        let productID = element;
        queryProdInfo = `https://api.spoonacular.com/food/products/${productID}?${productID}&apiKey=${apiKey}`

        $.get(queryProdInfo, function () {}).then(function(data){
            productData[data.id] = {
                id: data.id,
                title: data.title,
                ingriendents: data.ingredientList,
                nutrition:data.nutrition,
                badges: data.badges
            }
        })
    })
    console.log(productData)
});

