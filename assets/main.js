
$(document).ready( function(){
    function getWeather(){

        var userCity = "";

        var openweathermapAPIKEY = "376fffcd91763ad35ed350f2f78f8296";

        var openweathermapQueryURL = "https://api.openweathermap.org/data.2.5/weather?q=" + userCity +"$appid=" + openweathermapAPIKEY;

        $.ajax({
            url: openweathermapQueryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
        })
    }
    function getDestination(){

        var destCity ="";

    
  

        
    
    $.ajax({
        url: "https://apidojo-kayak-v1.p.rapidapi.com/locations/search?where=" + destCity,
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "95faa2613dmsh9cf38f16b3fd33bp1f9e0djsnbdbe12d99b9f"
            }
            }).then(function(response) {
            console.log(response)
        });
    })

