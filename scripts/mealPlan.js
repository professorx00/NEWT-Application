$(document).ready(function () {

    function getMealPlan() {

        let diet = ""
        let timeFrame = ""
        let targetCalories = ""
        let exclude = ""

        var queryURL = "https://api.spoonacular.com/recipes/mealplans/generate?" + "timeFrame=" + timeFrame + "&targetCalories=" + targetCalories +
        "&diet=" + diet + "&exclude" + exclude + "&apiKey=615df94260a44b4da806def011b2e2c7"
        
        

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);
                

                


            });

    };

    getMealPlan();

});