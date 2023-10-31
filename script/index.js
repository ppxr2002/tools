let longue = window.innerHeight;
let large = window.innerWidth;
let hchrono = 550;
let wchrono = 550;
let hcal = 660;
let wcal = 520;
let hcale = 550;
let wcale = 550;
let hal = 500;
let wal = 550;
let left;
let haut;
let fond = $(".fond");
let home = $("#header-1");

window.onload = function(){
    mettreAJourHeure();
    setInterval(mettreAJourHeure, 1000);
    
    $(document).ready(function() {
        var $image = $("#icon");
        var $slide = $("[id='slide']");
        var $prev = $("#prev");
        var $next = $("#next");

        $($slide[0]).click(function(){
            $(fond).css("zIndex",100);
            $(fond).css("opacity",1);
            left = (large-wal)/2;
            haut = (longue-hal)/2; 
            let nouv = window.open("other pages/alarme.html","_blank","width="+wal+",height="+hal+",left="+left+",top="+haut);
            nouv.focus();
            if(nouv.close == false){
                console.log("maty eh");
            }
        })
        $($slide[1]).click(function(){
            left = (large-wcal)/2;
            haut = (longue-hcal)/2 
            let nouv = window.open("other pages/calculatrice.html","_blank","width="+wcal+",height="+hcal+",left="+left+",top="+haut);
            nouv.focus();
            $(fond).css("z-index",100);
            $(fond).css("opacity",1);
        })
        $($slide[2]).click(function(){
            left = (large-wcale)/2;
            haut = (longue-hcale)/2 
            let nouv = window.open("other pages/calendrier.html","_blank","width="+wcale+",height="+hcale+",left="+left+",top="+haut);
            nouv.focus();
            $(fond).css("z-index",100);
            $(fond).css("opacity",1);
        })
        $($slide[3]).click(function(){
            left = (large-wchrono)/2;
            haut = (longue-hchrono)/2 
            let nouv = window.open("other pages/testChrono.html","_blank","width="+wchrono+",height="+hchrono+",left="+left+",top="+haut);
            nouv.focus();
            $(fond).css("z-index",100);
            $(fond).css("opacity",1);
        })
    
        $next.click(
            function(){
                $slide.each(function(index,element){
                    if($(element).hasClass("active")){
                        let i = index-1;
                        if(i==-1){
                            i = 3;
                        }
                        $($slide[i]).toggleClass("active");
                        $($slide[index]).toggleClass("active");
                        return false;
                    }
                })
            })

        $prev.click(
           function(){
                $slide.each(function(index,element){
                    if($(element).hasClass("active")){
                        let i = index+1;
                        if(i==$slide.length){
                            i = 0;
                        }
                        $($slide[i]).toggleClass("active");
                        $($slide[index]).toggleClass("active");
                        console.log(i)
                        return false;
                    }
                })
            })

        $image.hover(
            function() {
                $image.attr("src", "img/Design-sans-titre-unscreen.gif");
            },
            function() {
                $image.attr("src", "img/Design-sans-titre-unscreen.png");
            }
            );
        });
        $(home).click(function(){
            $(fond).css("zIndex",-100);
            $(fond).css("opacity",0);
        })  
        
    }

function lera() {
    var date = new Date();
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    if(heures<10){
        heures = "0" + heures;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    if(secondes<10){
        secondes = "0" + secondes;
    }
    return heures + ":" + minutes + ":" + secondes;
}

function daty(){
    var date = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toDateString(undefined,options+'-');

}

function mettreAJourHeure() {
    var heureActuelle = lera();
    var dateActuelle = daty();
    $("#heures").text(heureActuelle);
    $("#dates").text(dateActuelle);
}


