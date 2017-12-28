var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat,lon;
$(document).ready(function(){
  //寻找当前位置--location    
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = "lat=" + position.coords.latitude;
      lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  }else {
    console.log("Geolocation is not supported by this browser.");
  }
  //C <--> F
  $("button").click(function(){
    $("#temp").toggle();
    $("#tempF").toggle();
  });
  var tempString = $("#temp").text();
  var tempNumber = Number(tempString.slice(0,-2));
  $("#tempF").prepend(convertToF(tempNumber));
  function convertToF(celsius) {
    var fahrenheit;
    fahrenheit = celsius *(9/5) + 32;
    return fahrenheit;
  }

  function getWeather(lat, lon) {
    var urlString = api + lat + "&" + lon;
    $.ajax({
      url: urlString,
      success: function(result) {
        $("#location").text(result.name + ", " + result.sys.country);
        $("#mainWeather").text(result.weather[0].main);
        $("#temp").prepend(result.main.temp + "&#176;C");
        $("img").attr("src",result.weather[0].icon);
      }
    });
  }

});

