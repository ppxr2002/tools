let chiffre = $("[id='chiffre']");
let op = $("[id='op']");
let operante = $(".operante");
let valiny = $(".valiny");
let egal = $(".egal");
let ac = $(".ac");
let del = $(".del");
let vir = $(".virgule");
let a="";
let b="";
let c="";
let d=0;

window.onload = function(){
    nombre(0);
    nombre(1);
    nombre(2);
    nombre(3);
    nombre(4);
    nombre(5);
    nombre(6);
    nombre(7);
    nombre(8);
    nombre(9);
    operateur(0);
    operateur(1);
    operateur(2);
    operateur(3);

    $(ac).click(function(){
        a = b = c = "";
        d = 0;
        valiny.text(0);
        operante.text(0);
    })

    $(del).click(function(){
        a = operante.text();
        a = a.slice(0,-1);
        operante.text(a);
        if(a==="") {
            a = "0";
            operante.text(0);
        }
    })

    $(vir).click(function(){
        a = operante.text();
        a = a + ".";
        operante.text(a);
    })

    $(egal).click(function(){
        if(c=="+") {
            d = parseFloat(a) + parseFloat(b);
            operante.text(d);
            valiny.text(b + "+" + a);
            a = d
        }
        if(c=="-") {
            d = parseFloat(b) - parseFloat(a);
            operante.text(d);
            valiny.text(b + "-" + a);
            a = d
        }
        if(c=="x") {
            d = parseFloat(a) * parseFloat(b);
            operante.text(d);
            valiny.text(b + "X" + a);
            a = d
        }
        if(c=="/") {
            d = parseFloat(b) / parseFloat(a);
            operante.text(d);
            valiny.text(b + "/" + a);
            a = d
        }
    })
}
function nombre(i){
    $(chiffre[i]).click(()=>{
        a = a + $(chiffre[i]).val();
        operante.text(a);
    })
}
function operateur(i){
    $(op[i]).click(()=>{
        b = operante.text();
        valiny.text(a);
        c = $(op[i]).val();
        operante.text("0");
        a="";
    })
}