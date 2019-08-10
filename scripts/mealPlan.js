$(document).ready(function () {

    function getMealPlan() {

        let diet = "vegetarian"
        let timeFrame = "day"
        let targetCalories = "2000"
        let exclude = "olives"

        var queryURL = "https://api.spoonacular.com/recipes/mealplans/generate?" + "timeFrame=" + timeFrame + "&targetCalories=" + targetCalories +
        "&diet=" + diet + "&exclude" + exclude + "&apiKey=615df94260a44b4da806def011b2e2c7"
        
        

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

                let mealChoiceOne = response.meals[0];
                let mealChoiceTwo = response.meals[1];
                let mealChoiceThree = response.meals[2];
                let mealNutrients = response.nutrients;

                console.log(mealChoiceOne);
                console.log(mealChoiceTwo);
                console.log(mealChoiceThree);

                console.log(mealNutrients);
                

                


            });

    };

    getMealPlan();

});