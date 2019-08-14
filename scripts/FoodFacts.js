$(document).ready(function () {
    imgUrls = [food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15,food16,food17,food18]

    console.log("fun")
     let apiKey = "e9a27e4da700489a836bf1b7cdc449b9"
    //615df94260a44b4da806def011b2e2c7
    function getFoodFact(i,img) {

        let queryURL = `https://api.spoonacular.com/food/trivia/random?apiKey=${apiKey}`;

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {

                let foodFact = response.text;
                console.log(foodFact)
                let foodcard = $("<div>").addClass("card")
                let imgTag = $("<img>").attr("src", `./imgs/${img}.jpg`)
                let foodFactCard = $("<div>").addClass("card-body")
                let foodTitle = $("<H5>").addClass("card-title").text(`Food Fact # ${i+1}`)
                let foodBody = $("<p>").addClass("card-text").text(foodFact)
                foodFactCard.append(foodTitle,foodBody)
                foodcard.append(imgTag,foodFactCard).attr("id", "foodSection")
                $("#factContainer").append(foodcard)

            });

    };

    for (i = 0; i < 9; i++) {
        num = Math.floor(Math.random*8)
        for(j=num; j<num+9; j++){
            getFoodFact(i,imgUrls[j]);
        }
        
    };


});