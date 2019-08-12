$(document).ready(function () {

    // Create the QuaggaJS config object for the live stream
    let liveStreamConfig = {
        inputStream: {
            type: "LiveStream",
            constraints: {
                width: { min: 640 },
                height: { min: 480 },
                aspectRatio: { min: 1, max: 100 },
                facingMode: "environment" // or "user" for the front camera
            }
        },
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: (navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4),
        decoder: {
            "readers": [
                {
                    "format": "upc_reader",
                    "config": {}
                },
            ]
        },
        locate: true
    };
    // The fallback to the file API requires a different inputStream option. 
    // The rest is the same 
    let fileConfig = $.extend(
        {},
        liveStreamConfig,
        {
            inputStream: {
                size: 800
            }
        }
    );

    // Start the live stream scanner when the modal opens
    $('#livestream_scanner').on('shown.bs.modal', function (e) {
        Quagga.init(
            liveStreamConfig,
            function (err) {
                if (err) {
                    $('#livestream_scanner .modal-body .error').html('<div class="alert alert-danger"><strong><i class="fa fa-exclamation-triangle"></i> ' + err.name + '</strong>: ' + err.message + '</div>');
                    Quagga.stop();
                    return;
                }
                Quagga.start();
            }
        );
    });



    // Make sure, QuaggaJS draws frames an lines around possible 
    // barcodes on the live stream
    Quagga.onProcessed(function (result) {
        let drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }
        }
    });

    // Once a barcode had been read successfully, stop quagga and 
    // close the modal after a second to let the user notice where 
    // the barcode had actually been found.

    Quagga.onDetected(function (result) {
        console.log("reached onDetected");
        // alert(result.codeResult.code);
        if (result.codeResult.code) {
            $('#scanner_input').val(result.codeResult.code);
            Quagga.stop();
            setTimeout(function () { $('#livestream_scanner').modal('hide'); }, 1000);
        }
    });

    // Stop quagga in any case, when the modal is closed
    $('#livestream_scanner').on('hidden.bs.modal', function () {
        if (Quagga) {
            Quagga.stop();
        }
    });

    // Call Quagga.decodeSingle() for every file selected in the 
    // file input
    $("#livestream_scanner input:file").on("change", function (e) {
        if (e.target.files && e.target.files.length) {
            Quagga.decodeSingle($.extend({}, fileConfig, { src: URL.createObjectURL(e.target.files[0]) }), function (result) { alert(result.codeResult.code); });
        }
    });

    //TODO: Product Search API
    //TODO: Grab Fields from Index
    //TODO: Pushback data

    const apiKey = `3fa48d8832ec49088f593fab542b7eea`;

    let productIds = [];
    let productData = {}

    //document Jquery Items:

    const product = $("#query");
    const btn = $("#productSearchBtn");
    const glist = $("#gList")
    const results = $("#prodSearchResults")




    btn.on("click", (e) => {
        console.log("clicked")
        e.preventDefault();
        item = product.val()
        console.log(item)
        queryProduct = `https://api.spoonacular.com/food/products/upc/{upc}`


        $.get(queryProduct, function () {

        }).then(function (apiData) {

            apiResults = apiData.products
            console.log(apiResults)

            apiResults.forEach(element => {
                productIds.push(element.id);
                // console.log(productId)
            });
            console.log(productIds)
        }).then(function (promise) {

            productIds.forEach(element => {
                let productID = element;
                queryProdInfo = `https://api.spoonacular.com/food/products/${productID}?${productID}&apiKey=${apiKey2}`

                $.get(queryProdInfo, function () { }).then(function (data) {
                    console.log(results)
                    docNewDiv = $("<div>").attr("data-id", data.id).append($("<h1>").text(data.title)).append($("<p>").text(data.ingredientList))
                    console.log(docNewDiv)
                    docNutrition = $("<ul>")
                    console.log(data.nutrition.calories)
                    docCalories = $("<li>").text(`Calories: ${data.nutrition.calories}`)
                    docCarbs = $("<li>").text(`Carbs: ${data.nutrition.carbs}`)
                    docFat = $("<li>").text(`Fat: ${data.nutrition.fat}`)
                    docProtein = $("<li>").text(`Protein: ${data.nutrition.protein}`)

                    docNutrition.append(docCalories, docCarbs, docFat, docProtein)
                    console.log(docNutrition)
                    docNewDiv.append(docNutrition)

                    results.append(docNewDiv)

                    productData[data.id] = {
                        id: data.id,
                        title: data.title,
                        ingriendents: data.ingredientList,
                        nutrition: data.nutrition,
                        badges: data.badges
                    }
                })
            })
        }).then(() => {
            console.log(productData)
        })
    });
})