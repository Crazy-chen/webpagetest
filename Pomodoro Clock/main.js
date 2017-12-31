var sessionTime = document.getElementsByClassName("btn-success")[0];
var breakTime = document.getElementsByClassName("btn-primary")[0];
var pauseTime = document.getElementsByClassName("btn-warning")[0];
var resetTime = document.getElementsByClassName("btn-danger")[0];
var timeSet = document.getElementById("restTime").value;
var myTime, hour, minute, second, id;
$(document).ready(function(){
    sessionTime.addEventListener("click", function () {
      stopTimer();
      id = "sessionTime";
      setTimer(id);
      $("#1,#2").hide("slow");
      $("#work-content").show("slow");
      $("#work-content h2>span").text("Focus");
      $("#work-content p").html("Focus more on your desire than on your doubt, and the dream will take care of itself.——Marcia Wieder");
     });
// breakTime.addEventListener("click", function () {
//        breakTime = document.getElementsByClassName("btn-primary")[0];
//      setTimer(id)
// });
    resetTime.addEventListener("click", function () {
      stopTimer();
      $("#work-content").hide("slow","swing");
      $("#1,#2").show("slow");
      document.getElementById("restTime").value = "00:25:00";
    });
    function setTimer(id) {
      timeSet = document.getElementById(id).value;
      console.log(id);
      hour = Number(timeSet.split(":")[0]);
      minute = Number(timeSet.split(":")[1]);
      timeSet.split(":")[2] == NaN ? second = Number(timeSet.split(":")[2]) : second = 0;
      startTimer(id);
    }
//console.log(second);
//startTimer();
    function startTimer(id) {
      myTime = window.setInterval(function () { time() }, 1000);
      //pauseTime.addEventListener("click",function(){startTimer()});
      //console.log(id);
      function time() {
        pauseTime.addEventListener("click", function () {
            $("#work-content").hide("slow","swing");            
            $("#1,#2").show("slow");
            stopTimer();
            pauseTime.addEventListener("click", function () {
                //console.log(second);
                $("#1,#2").hide("slow");
                $("#work-content").show("slow");
                stopTimer();
                myTime = window.setInterval(function () { time() }, 1000)
             });
        });
        if (second === 0 && minute === 0 && hour === 0) {
            $("#work-content p").text("Life is about moving on, accepting changes, and looking forward to what makes you stronger and more complete.");
            $("#work-content h2>span").text("Take a break.");
            $("#work-content p").text("Life is about moving on, accepting changes, and looking forward to what makes you stronger and more complete.")
            //alert("Take a break!");
            //console.log(id);
            if (id === "sessionTime") {
                stopTimer();
                setTimer("breakTime");
            } else {
                alert("End of break!");
                stopTimer();
                $("#1,#2").show("slow");
                $("#work-content").hide("slow","swing");
            }
            //stopTimer();
        } else if (second === 0 && minute === 0 && hour !== 0) {
            second = 59;
            minute = 59;
            hour -= 1;
        } else if (second === 0 && minute !== 0) {
            second = 59;
            minute -= 1;
        } else if (second === 0) {
            second = 59;
        } else {
            second -= 1;
        }
        var format = [hour, minute, second];
        var formal = format.map(x => x >= 10 ? x = String(x) : x = "0" + x).join(":");
        console.log(second);
        console.log(formal);
        document.getElementById("restTime").value = formal;
    }

}
function stopTimer() {
    clearInterval(myTime);
}
});