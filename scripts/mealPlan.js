$(document).ready(function () {


    function resetMealPlan () {
        $("Diet").val('');
        $("#timeFrame").val('');
        $("#targetCalories").val('');
        $("#exclude").val('');
    };

    function getMealPlanDay() {

        let diet = $("#Diet option:selected").text();
        let timeFrame = $("#timeFrame").val();
        let targetCalories = $("#targetCalories").val() || "2000";
        let exclude = $("#exclude").val();
        var queryURL = "https://api.spoonacular.com/recipes/mealplans/generate?" + "timeFrame=" + timeFrame + "&targetCalories=" + targetCalories +
        "&diet=" + diet + "&exclude" + exclude + "&apiKey=615df94260a44b4da806def011b2e2c7"
        


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {


                let mealsCalories = response.nutrients.calories;
                let mealsCarbs = response.nutrients.carbohydrates;
                let mealsFat = response.nutrients.fat;
                let mealsProtein = response.nutrients.protein;

                let mealChoiceOneTime = response.meals[0].readyInMinutes;
                let mealChoiceOneId = response.meals[0].id;
                let mealChoiceOneServings = response.meals[0].servings;
                let mealChoiceOneTitle = response.meals[0].title;

                let mealChoiceTwoTime = response.meals[1].readyInMinutes;
                let mealChoiceTwoId = response.meals[1].id;
                let mealChoiceTwoServings = response.meals[1].servings;
                let mealChoiceTwoTitle = response.meals[1].title;

                let mealChoiceThreeTime = response.meals[2].readyInMinutes;
                let mealChoiceThreeId = response.meals[2].id;
                let mealChoiceThreeServings = response.meals[2].servings;
                let mealChoiceThreeTitle = response.meals[2].title;
                

                console.log("Meal One: " + mealChoiceOneTitle);
                console.log("Id : " + mealChoiceOneId);
                console.log("Minutes to make : " + mealChoiceOneTime);
                console.log("Servings : " + mealChoiceOneServings);

                console.log("Meal Two: " + mealChoiceTwoTitle);
                console.log("Id : " + mealChoiceTwoId);
                console.log("Minutes to make : " + mealChoiceTwoTime);
                console.log("Servings : " + mealChoiceTwoServings);

                console.log("Meal three: " + mealChoiceThreeTitle);
                console.log("Id : " + mealChoiceThreeId);
                console.log("Minutes to make : " + mealChoiceThreeTime);
                console.log("Servings : " + mealChoiceThreeServings);

                console.log("Total Calories for the Day : " + mealsCalories);
                console.log("Total Carbs for the Day : " + mealsCarbs);
                console.log("Total Fats for the Day : " + mealsFat);
                console.log("Total Proteins for the Day : " + mealsProtein);
                

                

                


            });

    };

    function getMealPlanWeek() {

        let diet = $("#Diet option:selected").text();
        let timeFrame = $("#timeFrame").val();
        let targetCalories = $("#targetCalories").val() || "2000";
        let exclude = $("#exclude").val();
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

    $("#mealPlanSearchBtn").on("click", function(){
        
        if ($("#timeFrame").val() === "Week") {

            getMealPlanWeek();

        } else  {
            
            getMealPlanDay();
        }
        

        
        

    });


});