$(document).ready(function () {


    function resetMealPlan() {
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


                let MealPlanTitle = response.name;

                let dayOneMealOneTitle = JSON.parse(response.items[0].value).title;
                let dayOneMealOneId = JSON.parse(response.items[0].value).id;
                let dayOneMealTwoTitle = JSON.parse(response.items[1].value).title;
                let dayOneMealTwoId = JSON.parse(response.items[1].value).id;
                let dayOneMealThreeTitle = JSON.parse(response.items[2].value).title;
                let dayOneMealThreeId = JSON.parse(response.items[2].value).id;

                let dayTwoMealOneTitle = JSON.parse(response.items[3].value).title;
                let dayTwoMealOneId = JSON.parse(response.items[3].value).id;
                let dayTwoMealTwoTitle = JSON.parse(response.items[4].value).title;
                let dayTwoMealTwoId = JSON.parse(response.items[4].value).id;
                let dayTwoMealThreeTitle = JSON.parse(response.items[5].value).title;
                let dayTwoMealThreeId = JSON.parse(response.items[5].value).id;

                let dayThreeMealOneTitle = JSON.parse(response.items[6].value).title;
                let dayThreeMealOneId = JSON.parse(response.items[6].value).id;
                let dayThreeMealTwoTitle = JSON.parse(response.items[7].value).title;
                let dayThreeMealTwoId = JSON.parse(response.items[7].value).id;
                let dayThreeMealThreeTitle = JSON.parse(response.items[8].value).title;
                let dayThreeMealThreeId = JSON.parse(response.items[8].value).id;

                let dayFourMealOneTitle = JSON.parse(response.items[9].value).title;
                let dayFourMealOneId = JSON.parse(response.items[9].value).id;
                let dayFourMealTwoTitle = JSON.parse(response.items[10].value).title;
                let dayFourMealTwoId = JSON.parse(response.items[10].value).id;
                let dayFourMealThreeTitle = JSON.parse(response.items[11].value).title;
                let dayFourMealThreeId = JSON.parse(response.items[11].value).id;

                let dayFiveMealOneTitle = JSON.parse(response.items[12].value).title;
                let dayFiveMealOneId = JSON.parse(response.items[12].value).id;
                let dayFiveMealTwoTitle = JSON.parse(response.items[13].value).title;
                let dayFiveMealTwoId = JSON.parse(response.items[13].value).id;
                let dayFiveMealThreeTitle = JSON.parse(response.items[14].value).title;
                let dayFiveMealThreeId = JSON.parse(response.items[14].value).id;

                let daySixMealOneTitle = JSON.parse(response.items[15].value).title;
                let daySixMealOneId = JSON.parse(response.items[15].value).id;
                let daySixMealTwoTitle = JSON.parse(response.items[16].value).title;
                let daySixMealTwoId = JSON.parse(response.items[16].value).id;
                let daySixMealThreeTitle = JSON.parse(response.items[17].value).title;
                let daySixMealThreeId = JSON.parse(response.items[17].value).id;

                let daySevenMealOneTitle = JSON.parse(response.items[18].value).title;
                let daySevenMealOneId = JSON.parse(response.items[18].value).id;
                let daySevenMealTwoTitle = JSON.parse(response.items[19].value).title;
                let daySevenMealTwoId = JSON.parse(response.items[19].value).id;
                let daySevenMealThreeTitle = JSON.parse(response.items[20].value).title;
                let daySevenMealThreeId = JSON.parse(response.items[20].value).id;

                console.log(MealPlanTitle);

                console.log("Day 1 - Meal 1 : " + dayOneMealOneTitle + ", id: " + dayOneMealOneId);
                console.log("Day 1 - Meal 2 : " + dayOneMealTwoTitle + ", id: " + dayOneMealTwoId);
                console.log("Day 1 - Meal 3 : " + dayOneMealThreeTitle + ", id: " + dayOneMealThreeId);

                console.log("Day 2 - Meal 1 : " + dayTwoMealOneTitle + ", id: " + dayTwoMealOneId);
                console.log("Day 2 - Meal 2 : " + dayTwoMealTwoTitle + ", id: " + dayTwoMealTwoId);
                console.log("Day 2 - Meal 3 : " + dayTwoMealThreeTitle + ", id: " + dayTwoMealThreeId);

                console.log("Day 3 - Meal 1 : " + dayThreeMealOneTitle + ", id: " + dayThreeMealOneId);
                console.log("Day 3 - Meal 2 : " + dayThreeMealTwoTitle + ", id: " + dayThreeMealTwoId);
                console.log("Day 3 - Meal 3 : " + dayThreeMealThreeTitle + ", id: " + dayThreeMealThreeId);

                console.log("Day 4 - Meal 1 : " + dayFourMealOneTitle + ", id: " + dayFourMealOneId);
                console.log("Day 4 - Meal 2 : " + dayFourMealTwoTitle + ", id: " + dayFourMealTwoId);
                console.log("Day 4 - Meal 3 : " + dayFourMealThreeTitle + ", id: " + dayFourMealThreeId);

                console.log("Day 5 - Meal 1 : " + dayFiveMealOneTitle + ", id: " + dayFiveMealOneId);
                console.log("Day 5 - Meal 2 : " + dayFiveMealTwoTitle + ", id: " + dayFiveMealTwoId);
                console.log("Day 5 - Meal 3 : " + dayFiveMealThreeTitle + ", id: " + dayFiveMealThreeId);

                console.log("Day 6 - Meal 1 : " + daySixMealOneTitle + ", id: " + daySixMealOneId);
                console.log("Day 6 - Meal 2 : " + daySixMealTwoTitle + ", id: " + daySixMealTwoId);
                console.log("Day 6 - Meal 3 : " + daySixMealThreeTitle + ", id: " + daySixMealThreeId);

                console.log("Day 7 - Meal 1 : " + daySevenMealOneTitle + ", id: " + daySevenMealOneId);
                console.log("Day 7 - Meal 2 : " + daySevenMealTwoTitle + ", id: " + daySevenMealTwoId);
                console.log("Day 7 - Meal 3 : " + daySevenMealThreeTitle + ", id: " + daySevenMealThreeId);






                
                

                
                






            });

    };

    $("#mealPlanSearchBtn").on("click", function () {

        if ($("#timeFrame").val() === "Week") {

            getMealPlanWeek();
            resetMealPlan();

        } else {

            getMealPlanDay();
            resetMealPlan();

        }





    });


});