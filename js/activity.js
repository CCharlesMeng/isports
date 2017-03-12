/**
 * Created by mr.meng on 17/3/9.
 */


$(document).ready(

);

function changeToColor(btn){
    $("#"+btn.id).removeClass("fa-heart-o-grey");
    $("#"+btn.id).addClass("fa-heart-red");
    //$("#"+btn.id).setAttribute("color","#bc0000");
}

function changeToGrey(btn){
    $("#"+btn.id).removeClass("fa-heart-red");
    $("#"+btn.id).addClass("fa-heart-o-grey");
    //$("#"+btn.id).style.color="darkgray";
}

function showTip(btn){

}

function removeTip(btn){

}
