$(document).ready(function () {

    let apiKey = "615df94260a44b4da806def011b2e2c7"
    let apiKeyTwo = "8ddc0ae008584fe49220c56590f9c9dc"

    let productIds = [];
    let mealPlanIds = [];

    let mealResults = $("#mealPlanSearchResults");

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
            "&diet=" + diet + "&exclude" + exclude + "&apiKey=" + apiKeyTwo



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

                productIds.push(mealChoiceOneId);
                productIds.push(mealChoiceTwoId);
                productIds.push(mealChoiceThreeId);


                let mealOneDiv = $("<div>")
                    .attr("class", "meal")
                    .append($("<h1>").text("Meal One : " + mealChoiceOneTitle))
                    .append($("<p>").text("ID : " + mealChoiceOneId))
                    .append($("<p>").text("Servings : " + mealChoiceOneServings))
                    .append($("<p>").text("Time : " + mealChoiceOneTime));
                let mealTwoDiv = $("<div>")
                    .attr("class", "meal")
                    .append($("<h1>").text("Meal Two : " + mealChoiceTwoTitle))
                    .append($("<p>").text("ID : " + mealChoiceTwoId))
                    .append($("<p>").text("Servings : " + mealChoiceTwoServings))
                    .append($("<p>").text("Time : " + mealChoiceTwoTime));
                let mealThreeDiv = $("<div>")
                    .attr("class", "meal")
                    .append($("<h1>").text("Meal Three : " + mealChoiceThreeTitle))
                    .append($("<p>").text("ID : " + mealChoiceOneId))
                    .append($("<p>").text("Servings : " + mealChoiceOneServings))
                    .append($("<p>").text("Time : " + mealChoiceOneTime));

                let nutritionDiv = $("<ul>");

                nutritionCalories = $("<li>").text("Total Calories for the Day : " + mealsCalories);
                nutritionCarbs = $("<li>").text("Total Carbs for the Day : " + mealsCarbs);
                nutritionFat = $("<li>").text("Total Fat for the Day : " + mealsFat);
                nutritionProtein = $("<li>").text("Total Carbs for the Day : " + mealsProtein);

                nutritionDiv.append(nutritionCalories, nutritionCarbs, nutritionFat, nutritionProtein);

                mealResults.append(mealOneDiv, mealTwoDiv, mealThreeDiv, nutritionDiv);












            });
            // .then(function (promise) {

            //     mealPlanIds.forEach(element => {
            //         let productID = element;
            //         queryMealInfo = "https://api.spoonacular.com/recipes/" + productID + "/information?includeNutrition=true$apiKey=" + apiKeyTwo;


            //         $.get(queryMealInfo, function () { }).then(function (data) {





            //         });



            //     });

            // });

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


                let mealPlanTitle = response.name;


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

                mealPlanIds.push(dayOneMealOneId);
                mealPlanIds.push(dayOneMealTwoId);
                mealPlanIds.push(dayOneMealThreeId);
                mealPlanIds.push(dayTwoMealOneId);
                mealPlanIds.push(dayTwoMealTwoId);
                mealPlanIds.push(dayTwoMealThreeId);
                mealPlanIds.push(dayThreeMealOneId);
                mealPlanIds.push(dayThreeMealTwoId);
                mealPlanIds.push(dayThreeMealThreeId);
                mealPlanIds.push(dayFourMealOneId);
                mealPlanIds.push(dayFourMealTwoId);
                mealPlanIds.push(dayFourMealThreeId);
                mealPlanIds.push(dayFiveMealOneId);
                mealPlanIds.push(dayFiveMealTwoId);
                mealPlanIds.push(dayFiveMealThreeId);
                mealPlanIds.push(daySixMealOneId);
                mealPlanIds.push(daySixMealTwoId);
                mealPlanIds.push(daySixMealThreeId);
                mealPlanIds.push(daySevenMealOneId);
                mealPlanIds.push(daySevenMealTwoId);
                mealPlanIds.push(daySevenMealThreeId);

                console.log(mealPlanIds);


            });

    };

    $("#mealPlanSearchBtn").on("click", function () {

        if ($("#timeFrame").val() === "Week") {

            console.log("Week Plan")
            getMealPlanWeek();
            resetMealPlan();

        } else {
            console.log("Day Plan")
            getMealPlanDay();
            resetMealPlan();

        }





    });


});