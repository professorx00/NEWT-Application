$(document).ready(function () {
    const googleKey = "AIzaSyDeQ8rVGviT9v6Yqt7Ijg_5bHYFJxni1kU";

    let findPlaceURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters";
    let radius = 0;
    let currentLat = null;
    let currentLong = null;
    let nearbySearchURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.09065,-70.80009&radius=1500&type=supermarket&key=`

    let openMapURL = "https://www.openstreetmap.org/export/embed.html?bbox=-2.493209838867188%2C53.50540525319918%2C-2.246360778808594%2C53.61980121473449&amp;layer=mapnik&amp;marker=53.56274386269267%2C-2.3699569702148438"


    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.09065,-70.80009&radius=1500&type=supermarket&key=AIzaSyDeQ8rVGviT9v6Yqt7Ijg_5bHYFJxni1kU"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => console.log(contents))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    // fetch(`${nearbySearchURL}${googleKey}`)
    //     .then((locData) => {
    //         return locData.json();
    //     })
    //     .then((jsonData) => {
    //         console.log(JSON.stringify(jsonData));
    //     });

    if ("geolocation" in navigator) {
        /* geolocation is available */
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLat = position.coords.latitude;
            console.log(`current latitude: ${currentLat}`);
            currentLong = position.coords.longitude;
            console.log(`current longitude: ${currentLong}`);
        });
    } else {
        console.log("geolocation IS NOT available");
    }
})