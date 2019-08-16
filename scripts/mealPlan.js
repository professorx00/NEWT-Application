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
                            .append($("<h1>").text("Meal Name : " + data.title))
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

                        mealResults.append($("<p>").text("Instructions : " + data.instructions));

                    });



                });

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

                mealPlanIds.push(
                    dayOneMealOneId, dayOneMealTwoId, dayOneMealThreeId,
                    dayTwoMealOneId, dayTwoMealTwoId, dayTwoMealThreeId,
                    dayThreeMealOneId, dayThreeMealTwoId, dayThreeMealThreeId,
                    dayFourMealOneId, dayFourMealTwoId, dayFourMealThreeId,
                    dayFiveMealOneId, dayFiveMealTwoId, dayFiveMealThreeId,
                    daySixMealOneId, daySixMealTwoId, daySixMealThreeId,
                    daySevenMealOneId, daySevenMealTwoId, daySevenMealThreeId
                );


                console.log(mealPlanIds);

                let dayOne = $("<div>")
                    .append($("<h1>").text("Day One"))
                    .append($("<h2>").text("Meal One : " + dayOneMealOneTitle))
                    .append($("<p>").text("ID : " + dayOneMealOneId))
                    .append($("<h2>").text("Meal Two : " + dayOneMealTwoTitle))
                    .append($("<p>").text("ID : " + dayOneMealTwoId))
                    .append($("<h2>").text("Meal Three : " + dayOneMealThreeTitle))
                    .append($("<p>").text("ID : " + dayOneMealThreeId));

                let dayTwo = $("<div>")
                    .append($("<h1>").text("Day Two"))
                    .append($("<h2>").text("Meal One : " + dayTwoMealOneTitle))
                    .append($("<p>").text("ID : " + dayTwoMealOneId))
                    .append($("<h2>").text("Meal Two : " + dayTwoMealTwoTitle))
                    .append($("<p>").text("ID : " + dayTwoMealTwoId))
                    .append($("<h2>").text("Meal Three : " + dayTwoMealThreeTitle))
                    .append($("<p>").text("ID : " + dayTwoMealThreeId));

                let dayThree = $("<div>")
                    .append($("<h1>").text("Day Three"))
                    .append($("<h2>").text("Meal One : " + dayThreeMealOneTitle))
                    .append($("<p>").text("ID : " + dayThreeMealOneId))
                    .append($("<h2>").text("Meal Two : " + dayThreeMealTwoTitle))
                    .append($("<p>").text("ID : " + dayThreeMealTwoId))
                    .append($("<h2>").text("Meal Three : " + dayThreeMealThreeTitle))
                    .append($("<p>").text("ID : " + dayThreeMealThreeId))

                let dayFour = $("<div>")
                    .append($("<h1>").text("Day Four"))
                    .append($("<h2>").text("Meal One : " + dayFourMealOneTitle))
                    .append($("<p>").text("ID : " + dayFourMealOneId))
                    .append($("<h2>").text("Meal Two : " + dayFourMealTwoTitle))
                    .append($("<p>").text("ID : " + dayFourMealTwoId))
                    .append($("<h2>").text("Meal Three : " + dayFourMealThreeTitle))
                    .append($("<p>").text("ID : " + dayFourMealThreeId));

                let dayFive = $("<div>")
                    .append($("<h1>").text("Day Five"))
                    .append($("<h2>").text("Meal One : " + dayFiveMealOneTitle))
                    .append($("<p>").text("ID : " + dayFiveMealOneId))
                    .append($("<h2>").text("Meal Two : " + dayFiveMealTwoTitle))
                    .append($("<p>").text("ID : " + dayFiveMealTwoId))
                    .append($("<h2>").text("Meal Three : " + dayFiveMealThreeTitle))
                    .append($("<p>").text("ID : " + dayFiveMealThreeId));

                let daySix = $("<div>")
                    .append($("<h1>").text("Day Six"))
                    .append($("<h2>").text("Meal One : " + daySixMealOneTitle))
                    .append($("<p>").text("ID : " + daySixMealOneId))
                    .append($("<h2>").text("Meal Two : " + daySixMealTwoTitle))
                    .append($("<p>").text("ID : " + daySixMealTwoId))
                    .append($("<h2>").text("Meal Three : " + daySixMealThreeTitle))
                    .append($("<p>").text("ID : " + daySixMealThreeId))

                let daySeven = $("<div>")
                    .append($("<h1>").text("Day Seven"))
                    .append($("<h2>").text("Meal One : " + daySevenMealOneTitle))
                    .append($("<p>").text("ID : " + daySevenMealOneId))
                    .append($("<h2>").text("Meal Two : " + daySevenMealTwoTitle))
                    .append($("<p>").text("ID : " + daySevenMealTwoId))
                    .append($("<h2>").text("Meal Three : " + daySevenMealThreeTitle))
                    .append($("<p>").text("ID : " + daySevenMealThreeId))

                mealResults.append(dayOne, dayTwo, dayThree, dayFour, dayFive, daySix, daySeven);










            });

    };

    $("#mealPlanSearchBtn").on("click", function () {

        mealResults.empty();

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