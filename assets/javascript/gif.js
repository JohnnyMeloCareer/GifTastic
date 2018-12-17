$(document).ready(function () {
    // "https://api.giphy.com/v1/gifs/search?q=&api_key=mlT0GJ2Cu0hPQIBJR40GnauLvuSIF5d4$limit=5"

    var cartoonArray = ["That 70s Show", "How I Met Your Mother", "The big bang theory", "Full House", "Brooklyn Nine-Nine"];

    function gifName() {
        var gifN = $(this).attr("data")
    }
    for (i = 0; i < cartoonArray.length; i++) {
        $(".gifs-here").append("<button data='" + cartoonArray[i] + "'>" + cartoonArray[i] + "</button>")
    };

    $("button").on("click", function () {
        var textPull = $(this).attr("data");
        console.log(textPull)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=christmas " + $.trim(textPull) + "&api_key=mlT0GJ2Cu0hPQIBJR40GnauLvuSIF5d4&limit=10"
        console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var results = response.data;

            for (i = 0; i < results.length; i++) {

                var cartoonDiv = $("<div class='gif'>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var cartoonImage = $("<img data-still='" + results[i].images.fixed_height_still.url + "' data-animate='" + results[i].images.fixed_height.url + "' data-state='still' class='gif-image'>");

                cartoonImage.attr("src", results[i].images.fixed_height_still.url);


                cartoonDiv.append(cartoonImage);
                cartoonDiv.append(p);

                $(".results").prepend(cartoonDiv);
            }

            $(".gif-image").on("click", function () {
                console.log("I just got clicked");

                var state = $(this).attr("data-state")

                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                }

                else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            })


        })
    });

        $(".add-gif").on("click", function (event) {

            event.preventDefault();
            $(".gifs-here").empty();
            console.log("Click for new gif");

            var newGif = $(".gif-input").val().trim();
            console.log($("newGif"))
            $(".gif-input").val("");
           
            cartoonArray.push(newGif);


            for (i = 0; i < cartoonArray.length; i++) {
                $(".gifs-here").append("<button data='" + cartoonArray[i] + "'>" + cartoonArray[i] + "</button>")
            };

            $("button").on("click", function () {
                var textPull = $(this).attr("data");
                console.log(textPull)
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=christmas " + $.trim(textPull) + "&api_key=mlT0GJ2Cu0hPQIBJR40GnauLvuSIF5d4&limit=10"
                console.log(queryURL);


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);

                    var results = response.data;

                    for (i = 0; i < results.length; i++) {

                        var cartoonDiv = $("<div class='gif'>");

                        var p = $("<p>").text("Rating: " + results[i].rating);

                        var cartoonImage = $("<img data-still='" + results[i].images.fixed_height_still.url + "' data-animate='" + results[i].images.fixed_height.url + "' data-state='still' class='gif-image'>");

                        cartoonImage.attr("src", results[i].images.fixed_height_still.url);


                        cartoonDiv.append(cartoonImage);
                        cartoonDiv.append(p);

                        $(".results").prepend(cartoonDiv);
                    }

                    $(".gif-image").on("click", function () {
                        console.log("I just got clicked");

                        var state = $(this).attr("data-state")

                        if (state === "still") {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                        }

                        else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }
                    })


                })
            })
        })

});