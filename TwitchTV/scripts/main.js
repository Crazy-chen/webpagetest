$(document).ready(function(){
    //<li class="list-group-item list-group-item-success">第一格</li>
    var channelList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
    var deatails;
    var mainUrl = "https://wind-bow.gomix.me/twitch-api/"
    var urlCreate =  function(routes, channel) {
        return mainUrl + "/" +routes + "/" + channel + "?callback=?";
    };
    for(i of channelList){
        var id = '';
    $.getJSON( urlCreate("channels",i), function(data){
        console.log(data);
        id = data.name;
        $("ul").append("<li id="+data.name +">"+"<a href='" + data.url + "'>"+"<img src='" + data.logo + "' alt='" + data.display_name + "'>"+"<h2>" + data.display_name + "</h2></a><span class='badge'>OFFLINE</span>"+"</li>");

        
        
        $("#"+data.name).append("<p>" + data.status + "</p>");
        $("#"+data.name).addClass("list-group-item list-group-item-primary")

    });
    $.getJSON( urlCreate("streams",i), function(data){
        console.log(data);
        if(data.stream === null){
            
            
        }else if (data.stream !== null) {
            $("#"+data.stream.channel.name).append("<p>Viewers: " + data.stream.viewers + "</p>");
            $("#"+data.stream.channel.name).addClass("list-group-item list-group-item-success");
            $(`#${data.stream.channel.name} > span`).addClass("badge-online");
            $(`#${data.stream.channel.name} > span`).text("ONLINE");
        }
    });
};

});