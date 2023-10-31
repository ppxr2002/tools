let $heure = $("#heure");
let $minute = $("#minute");
let $seconde = $("#seconde");
let $music = $("[id='music']");
let $liste = $("#liste");
let $btnson = $("#btnson");
let $quit = $("#quit");
let $ok = $("#ok");
let $plus = $("#plus");
let $message = $(".message");
let $sound = $("[id='son']");

window.onload = function(){
    $ok.click(alarme);
    $($sound[0]).hover(()=>{
        $music[0].play();
        $music[1].pause();
        $music[2].pause();
        $music[3].pause();
        $music[4].pause();
        $music[5].pause();
        $music[6].pause();
        $music[7].pause();
        setTimeout(()=>{
            $music[0].pause();
        },3000);
    });
    $($sound[1]).hover(()=>{
        $music[0].pause();
        $music[1].play();
        $music[2].pause();
        $music[3].pause();
        $music[4].pause();
        $music[5].pause();
        $music[6].pause();
        $music[7].pause();
        setTimeout(()=>{
            $music[1].pause();
        },3000);
    });
    $($sound[2]).hover(()=>{
        $music[0].pause();
        $music[1].pause();
        $music[2].play();
        $music[3].pause();
        $music[4].pause();
        $music[5].pause();
        $music[6].pause();
        $music[7].pause();
        setTimeout(()=>{
            $music[2].pause();
        },3000);
    });
    $($sound[3]).hover(()=>{
        $music[0].pause();
        $music[1].pause();
        $music[2].pause();
        $music[3].play();
        $music[4].pause();
        $music[5].pause();
        $music[6].pause();
        $music[7].pause();
        setTimeout(()=>{
            $music[3].pause();
        },3000);
    });
    $($sound[4]).hover(()=>{
        $music[0].pause();
        $music[1].pause();
        $music[2].pause();
        $music[3].pause();
        $music[4].play();
        $music[5].pause();
        $music[6].pause();
        $music[7].pause();
        setTimeout(()=>{
            $music[4].pause();
        },3000);
    });
    $($sound[5]).hover(()=>{
        $music[0].pause();
        $music[1].pause();
        $music[2].pause();
        $music[3].pause();
        $music[4].pause();
        $music[5].play();
        $music[6].pause();
        $music[7].pause();
        setTimeout(()=>{
            $music[5].pause();
        },3000);
    });
    $($sound[6]).hover(()=>{
        $music[0].pause();
        $music[1].pause();
        $music[2].pause();
        $music[3].pause();
        $music[4].pause();
        $music[5].pause();
        $music[6].play();
        $music[7].pause();
        setTimeout(()=>{
            $music[6].pause();
        },3000);
    });
    $($sound[7]).hover(()=>{
        $music[0].pause();
        $music[1].pause();
        $music[2].pause();
        $music[3].pause();
        $music[4].pause();
        $music[5].pause();
        $music[6].pause();
        $music[7].play();
        setTimeout(()=>{
            $music[7].pause();
        },3000);
    });
    $btnson.click(function(){
        $($liste).css("z-index", 100)
    });
    $quit.click(function(){
        $($liste).css("z-index", -1)
    });
    $plus.click(function(){
        let clone = $(".clone").clone();
        $(".time").append(clone);
    })
}
function alarme(){
    setInterval(function(){
        let date = new Date();
        let heures = date.getHours();
        let minutes = date.getMinutes();
        let secondes = date.getSeconds();
        
        let h = $heure.val();
        let m = $minute.val();
        let s = $seconde.val();
        let $son = $("[id='son']:checked");
        if((h==heures)&&(m==minutes)&&(s==secondes)){
            $music[$($son).val()].play();
            setTimeout(()=>{
                $music[$($son).val()].pause();
            },15000)
            $heure.val("");
            $minute.val("");
            $seconde.val("");
            $(".imgok").css("opacity",0);
        }
    },1000);
    $($liste).css("z-index", -1);
    if(($heure.val()!="")&&($minute.val()!="")&&($seconde.val()!="")){
        if(($heure.val()<24)&&($minute.val()<60)&&($seconde.val()<60)&&($heure.val()>=0)&&($minute.val()>=0)&&($seconde.val()>=0)){
            $(".imgok").css("opacity",1);
            $($message).css("background-color", "#fff");
            $($message).css("animation", "mipoitra 10s");
            $($message).css("color", "green");
            $message.text("OK!")
        }
        else{
            $($message).css("animation", "mipoitra 10s linear");
            $message.text("Heure non valide");
            $heure.val("");
            $minute.val("");
            $seconde.val("");
        }
    }
    else{
        $($message).css("animation", "mipoitra 10s linear");
        $message.text("Heure vide")
    }
}