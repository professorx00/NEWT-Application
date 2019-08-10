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

                let mealsCalories = response.nutrients.calories;
                let mealsCarbs = response.nutrients.carbohydrates;
                let mealsFat = response.nutrients.fat;
                let mealsProtein = response.nutrients.protein;

                let mealChoiceOneTime = response.meals[0].readyInMinutes;
                let mealChoiceOneId = response.meals[0].id;
                let mealChoiceOneServings = response.meals[0].servings;
                let mealChoiceOneTitle = response.meals[0].title;
                

                console.log("Title: " + mealChoiceOneTitle);
                console.log("Id : " + mealChoiceOneId);
                console.log("Minutes to make : " + mealChoiceOneTime);
                console.log("Servings : " + mealChoiceOneServings);

                console.log("Total Calories for the Day : " + mealsCalories);
                console.log("Total Carbs for the Day : " + mealsCarbs);
                console.log("Total Fats for the Day : " + mealsFat);
                console.log("Total Proteins for the Day : " + mealsProtein);
                
                

                


            });

    };

    getMealPlan();

});