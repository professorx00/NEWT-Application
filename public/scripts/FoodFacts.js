$(document).ready(function () {
    imgUrls = ["food1","food2","food3","food4","food5","food6","food7","food8","food9","food10","food11","food12","food13","food14","food15","food16","food17","food18"]
    facts = [
        "The oldest evidence for soup is from 6,000 B.C. and calls for hippopotamus and sparrow meat.",
        "Pringles once had a lawsuit trying to prove that they weren't really potato chips.",
        "Pound cake got its name from its original recipe, which called for a pound each of butter, eggs, sugar, and flour.",
        "Ripe cranberries will bounce like rubber balls.",
        "An average ear of corn has an even number of rows, usually 16.",
        "Consuming dairy may cause acne.",
        "Most wasabi consumed is not real wasabi, but colored horseradish.",
        " Central Appalachia's tooth decay problem is referred to as Mountain Dew mouth, due to the beverage's popularity in the region.",
        "Apples belong to the rose family, as do pears and plums.",
        "Oklahoma's state vegetable is the watermelon.",
        "One of the most popular pizza toppings in Brazil is green peas.",
        "About 70% of olive oil being sold is not actually pure olive oil.",
        "Real aged balsamic vinegar actually costs anywhere from $75 to $400 or more.",
        "Store bought 100% 'real' orange juice is 100% artificially flavored.",
        "The most expensive pizza in the world costs $12,000 and takes 72 hours to make.",
        "The winner of the 2013 Nathan's Hot Dog Eating contest consumed 69 hot dogs in 10 minutes.",
        "The Dunkin' Donuts in South Korea offer doughnut flavors such as Kimchi Croquette and Glazed Garlic.",
        "Chocolate was once used as currency.",
        "There is an amusement park in Tokyo that offers Raw Horse Flesh-flavored ice cream",
        "The tea bag was created by accident, as tea bags were originally sent as samples."
    ]
     let apiKey = "e9a27e4da700489a836bf1b7cdc449b9"
    //  let apiKey = "615df94260a44b4da806def011b2e2c7"
    function getFoodFact(i,img) {

        let queryURL = `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`;

        $.ajax({
            url: queryURL,
            method: "GET",
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                let foodFact = facts[i]
                let foodcard = $("<div>").addClass("card")
                let imgTag = $("<img>").attr("src", `./images/food/${img}.jpg`).addClass("foodImg")
                let foodFactCard = $("<div>").addClass("card-body")
                let foodTitle = $("<H5>").addClass("card-title").text(`Food Fact # ${i+1}`)
                let foodBody = $("<p>").addClass("card-text").text(foodFact)
                foodFactCard.append(foodTitle,foodBody)
                foodcard.append(imgTag,foodFactCard).attr("id", "foodSection")
                $("#factContainer").append(foodcard)

            }
        }).then(function (response) {
                console.log("the response is " + response);
                let foodFact = response.text;
                let foodcard = $("<div>").addClass("card")
                let imgTag = $("<img>").attr("src", `./images/food/${img}.jpg`).addClass("foodImg")
                let foodFactCard = $("<div>").addClass("card-body")
                let foodTitle = $("<H5>").addClass("card-title").text(`Food Fact # ${i+1}`)
                let foodBody = $("<p>").addClass("card-text").text(foodFact)
                foodFactCard.append(foodTitle,foodBody)
                foodcard.append(imgTag,foodFactCard).attr("id", "foodSection")
                $("#factContainer").append(foodcard)

            }).then(function(response){
                console.log(response)
            });

    }


    num = Math.floor(Math.random()*8)
    for (i = num; i < num+3; i++) {
        getFoodFact(i,imgUrls[i]);
    };


});