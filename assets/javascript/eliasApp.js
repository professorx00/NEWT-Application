$(document).ready(function () {

    Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#cameraPort')    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["code_128_reader"]
        }
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
      });

    // Quagga.decodeSingle({
    //     decoder: {
    //         readers: ["code_128_reader"] // List of active readers
    //     },
    //     locate: true, // try to locate the barcode in the image
    //     src: '/test/fixtures/code_128/image-001.jpg' // or 'data:image/jpg;base64,' + data
    // }, function (result) {
    //     if (result.codeResult) {
    //         console.log("result", result.codeResult.code);
    //     } else {
    //         console.log("not detected");
    //     }
    // });


    // const googleKey = "AIzaSyDeQ8rVGviT9v6Yqt7Ijg_5bHYFJxni1kU";

    // let findPlaceURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters";
    // let radius = 0;
    // let currentLat = null;
    // let currentLong = null;
    // let nearbySearchURL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.09065,-70.80009&radius=1500&type=supermarket&key=`

    // let openMapURL = "https://www.openstreetmap.org/export/embed.html?bbox=-2.493209838867188%2C53.50540525319918%2C-2.246360778808594%2C53.61980121473449&amp;layer=mapnik&amp;marker=53.56274386269267%2C-2.3699569702148438"


    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.09065,-70.80009&radius=1500&type=supermarket&key=AIzaSyDeQ8rVGviT9v6Yqt7Ijg_5bHYFJxni1kU"; // site that doesn’t send Access-Control-*

    // //array variable declaration
    // let lats = null;
    // let longs = null;


    // function getPlaceData(jsonObject){
    //     jsonObject.forEach(element => {
    //         lats.push(element.geometry.location.lat);
    //         longs.push(elment.geometry.location.lng);
    //     });
    //     console.log("lats, longs:\n---------------------------");
    //     console.log(lats);
    //     console.log(longs);
    // }

    //     fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    //         .then(response => response.json())
    //         .then(contents => {
    //             console.log(getPlaceData(contents.results))
    //         })
    //         .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


    //     if ("geolocation" in navigator) {
    //         /* geolocation is available */
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             currentLat = position.coords.latitude;
    //             console.log(`current latitude: ${currentLat}`);
    //             currentLong = position.coords.longitude;
    //             console.log(`current longitude: ${currentLong}`);
    //         });
    //     } else {
    //         console.log("geolocation IS NOT available");
    //     }
})