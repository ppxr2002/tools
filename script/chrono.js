let $pause = $("#pause");
let $play = $("#play");
let $stop = $("#stop");

window.onload = function(){
    $play.click(mande);
    $pause.click(mijanona);
    $stop.click(miverina);
}
let mm = 0;
let s = 0;
let m = 0;
let h = 0;
let time;
function plus(){
    if(mm>100) {
        s++;
        mm = 0;
    }
    if(s>60){
        m++;
        s = 0;
    }
    if(m>60){
        h++;
        m = 0;
    }
    mm++;
    $(".affichage").text(h + ":" + m + ":" + s + ":" + mm);
}
function mande(){
    time = setInterval(plus,1);
    $play.css("background","green");
    $pause.css("background","white");
    $stop.css("background","white");
}
function mijanona(){
    clearInterval(time);
    $play.css("background","white");
    $pause.css("background","rgb(6,42,73)");
    $stop.css("background","white");
}
function miverina(){
    mm = s = m = h = 0;
    $(".affichage").text("0" + h + ":0" + m + ":0" + s + ":00" + mm);
    $play.css("background","white");
    $pause.css("background","white");
    $stop.css("background","red");
    clearInterval(time);
}