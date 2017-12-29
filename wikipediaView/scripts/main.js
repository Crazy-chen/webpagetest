$(document).ready(function(){
  $("#search").on("click",function(){
    $("header,footer").hide("slow"); 
    $("#back").show("slow");
    $("ul").empty();
    var searchKey = $("input").val();
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=3&exlimit=max&exintro=1&explaintext=1&gsrlimit=15&gsrsearch=" + searchKey + "&callback=?",
    function(result){

      var idList=Object.keys(result.query.pages);

      for (var i = 0; i < idList.length; i++){
      $("ul").append("<a href='https://en.wikipedia.org/?curid=" + idList[i] + "' target='_blank' >" +"<li>" +"<span>" + result.query.pages[idList[i]].title + "</span>" + "<hr>" + result.query.pages[idList[i]].extract + "</li></a>");
      }

      $("li").hover(function(){
        $(this).css("color","#9E9E9E");  
      },function(){
        $(this).css("color","white");
      });
      
      $("#back").on("click",function(){
        $("header,footer").show("slow"); 
        $("#back").hide("slow");
      });


    });
  });


});
