$(document).ready(function () {

    let apiKeyOne = "615df94260a44b4da806def011b2e2c7"
    let apiKeyTwo = "8ddc0ae008584fe49220c56590f9c9dc"
    let apiKeyThree = "12227e1c37784d16a21cb569cbe66132"
    let apiKeyFour = "e66363fa94f542ba8a198f8cec2a0b3d"

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

        let excludeArray = [];
        let exclude = $("#exclude").val();
        excludeArray.push(exclude);

        let diet = $("#Diet option:selected").text();
        let timeFrame = $("#timeFrame").val();
        let targetCalories = $("#targetCalories").val() || "2000";
        
        var queryURL = "https://api.spoonacular.com/recipes/mealplans/generate?" + "timeFrame=" + timeFrame + "&targetCalories=" + targetCalories +
            "&diet=" + diet + "&exclude" + excludeArray + "&apiKey=" + apiKeyOne



        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                let mealChoiceOneId = response.meals[0].id;

                let mealChoiceTwoId = response.meals[1].id;

                let mealChoiceThreeId = response.meals[2].id;

                productIds.push(mealChoiceOneId);
                productIds.push(mealChoiceTwoId);
                productIds.push(mealChoiceThreeId);


            }).then(function (promise) {


                productIds.forEach(element => {
                    let productID = element;
                    queryMealInfo = "https://api.spoonacular.com/recipes/" + productID + "/information?includeNutrition=true&apiKey=" + apiKeyTwo;


                    $.get(queryMealInfo, function () { }).then(function (data) {

                        console.log(data);


                        let mealDiv = $("<div>")
                            .attr("class", "meal")
                            .append($("<h3>").text("Meal Name : " + data.title).addClass("text-center"))
                            .append($("<p>").text("Meal Type : " + data.dishTypes))
                            .append($("<p>").text("Health Score : " + data.healthScore))
                            .append($("<p>").text("Diets : " + data.diets))
                            .append($("<p>").text("Servings : " + data.servings))
                            .append($("<p>").text("Time : " + data.readyInMinutes + " minutes"))
                            .append($("<p>").text("Gluten Free : " + data.glutenFree))
                            .append($("<p>").text("Calories : " + data.nutrition.nutrients[0].amount))
                            .append($("<p>").text("Fat : " + data.nutrition.nutrients[1].amount))
                            .append($("<p>").text("Sugar : " + data.nutrition.nutrients[4].amount))
                            .append($("<p>").text("Protein : " + data.nutrition.nutrients[7].amount));


                        mealResults.append(mealDiv);

                        mealResults.append($("<h4>").text("Ingredients : ").addClass("font-weight-bold"));

                        for (i = 0; i < data.nutrition.ingredients.length; i++) {
                            mealResults.append($("<p>").text(data.nutrition.ingredients[i].name));

                        };

                        mealResults.append($("<h4>").text("Instructions : ").addClass("font-weight-bold"))
                        .append(data.instructions);

                    });



                });

            });

    };

    function getMealPlanWeek() {

        let excludeArray = [];
        let exclude = $("#exclude").val();
        excludeArray.push(exclude);

        let diet = $("#Diet option:selected").text();
        let timeFrame = $("#timeFrame").val();
        let targetCalories = $("#targetCalories").val() || "2000";
    
        var queryURL = "https://api.spoonacular.com/recipes/mealplans/generate?" + "timeFrame=" + timeFrame + "&targetCalories=" + targetCalories +
            "&diet=" + diet + "&exclude" + excludeArray + "&apiKey=" + apiKeyFour;

        let count=0;
        let countnext = 0;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                let dayOneMealOneId = JSON.parse(response.items[0].value).id;
                let dayOneMealTwoId = JSON.parse(response.items[1].value).id;
                let dayOneMealThreeId = JSON.parse(response.items[2].value).id;

                let dayTwoMealOneId = JSON.parse(response.items[3].value).id;
                let dayTwoMealTwoId = JSON.parse(response.items[4].value).id;
                let dayTwoMealThreeId = JSON.parse(response.items[5].value).id;

                let dayThreeMealOneId = JSON.parse(response.items[6].value).id;
                let dayThreeMealTwoId = JSON.parse(response.items[7].value).id;
                let dayThreeMealThreeId = JSON.parse(response.items[8].value).id;

                let dayFourMealOneId = JSON.parse(response.items[9].value).id;
                let dayFourMealTwoId = JSON.parse(response.items[10].value).id;
                let dayFourMealThreeId = JSON.parse(response.items[11].value).id;

                let dayFiveMealOneId = JSON.parse(response.items[12].value).id;
                let dayFiveMealTwoId = JSON.parse(response.items[13].value).id;
                let dayFiveMealThreeId = JSON.parse(response.items[14].value).id;

                let daySixMealOneId = JSON.parse(response.items[15].value).id;
                let daySixMealTwoId = JSON.parse(response.items[16].value).id;
                let daySixMealThreeId = JSON.parse(response.items[17].value).id;

                let daySevenMealOneId = JSON.parse(response.items[18].value).id;
                let daySevenMealTwoId = JSON.parse(response.items[19].value).id;
                let daySevenMealThreeId = JSON.parse(response.items[20].value).id;

                mealPlanIds.push(
                    dayOneMealOneId, dayOneMealTwoId, dayOneMealThreeId,
                    dayTwoMealOneId, dayTwoMealTwoId, dayTwoMealThreeId,
                    dayThreeMealOneId, dayThreeMealTwoId, dayThreeMealThreeId,
                    dayFourMealOneId, dayFourMealTwoId, dayFourMealThreeId,
                    dayFiveMealOneId, dayFiveMealTwoId, dayFiveMealThreeId,
                    daySixMealOneId, daySixMealTwoId, daySixMealThreeId,
                    daySevenMealOneId, daySevenMealTwoId, daySevenMealThreeId
                );

                count++;


            }).then(function (promise) {

                mealPlanIds.forEach(element => {
                    let productID = element;
                    queryMealInfo = "https://api.spoonacular.com/recipes/" + productID + "/information?includeNutrition=true&apiKey=" + apiKeyFour;


                    $.get(queryMealInfo, function () { }).then(function (data) {

                        console.log(data);


                        let mealDiv = $("<div>")
                            .attr("class", "meal")
                            .append($("<h3>").text("Meal Name : " + data.title).addClass("text-center"))
                            .append($("<p>").text("Meal Type : " + data.dishTypes))
                            .append($("<p>").text("Health Score : " + data.healthScore))
                            .append($("<p>").text("Diets : " + data.diets))
                            .append($("<p>").text("Servings : " + data.servings))
                            .append($("<p>").text("Time : " + data.readyInMinutes + " minutes"))
                            .append($("<p>").text("Gluten Free : " + data.glutenFree))
                            .append($("<p>").text("Calories : " + data.nutrition.nutrients[0].amount))
                            .append($("<p>").text("Fat : " + data.nutrition.nutrients[1].amount))
                            .append($("<p>").text("Sugar : " + data.nutrition.nutrients[4].amount))
                            .append($("<p>").text("Protein : " + data.nutrition.nutrients[7].amount));


                        mealResults.append(mealDiv);

                        mealResults.append($("<h4>").text("Ingredients : ").addClass("font-weight-bold"));

                        for (i = 0; i < data.nutrition.ingredients.length; i++) {
                            mealResults.append($("<p>").text(data.nutrition.ingredients[i].name));

                        };

                        mealResults.append($("<h4>").text("Instructions : ").addClass("font-weight-bold"))
                        .append(data.instructions);

                    });

                    countnext++;


                });

            });

    };

    $("#mealPlanSearchBtn").on("click", function () {

        mealResults.empty();

        if ($("#timeFrame").val() === "Week") {

            mealResults.append($("<h1>").text("7 Day Meal Plan!").addClass("text-center"));
            getMealPlanWeek();
            resetMealPlan();

        } else {
            mealResults.append($("<h1>").text("Single Day Meal Plan!").addClass("text-center"))
            getMealPlanDay();
            resetMealPlan();

        }

    });


});