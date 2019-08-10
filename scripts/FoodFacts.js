$(document).ready(function () {

    function getFoodFact() {

        var queryURL = "https://api.spoonacular.com/food/trivia/random?apiKey=615df94260a44b4da806def011b2e2c7"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                let foodFact = response.text;
                
                let foodFactDiv = $("<div>")
                
                let p = $("<p>").text("Food Fact : " + foodFact);

                foodFactDiv.append(p);


                $("#foodFactDiv").append(foodFactDiv);
                

                


            });

    };

    for (i = 0; i < 10; i++) {
        getFoodFact(i);
    };


});