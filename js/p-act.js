/**
 * Created by 云奎 on 2016/10/19.
 */
$(window).on("load resize",function(){
    var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    $("#sidebar").css("height",h-15);
    $(".panel1").css("height",h*0.191);
    $("#sum").css("height",h*0.382+15);
    $("#all").css("height",h*0.809-30);
    var w=$(window).width();
    $(".container").css("width",w);
});