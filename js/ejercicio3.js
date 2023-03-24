let dia = document.getElementById("dayYear");
let hora = document.getElementById("hour");
let diaEnero = document.getElementById("diaEnero");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(){
// console.log(dia.value);
// console.log(hora.value);
// let msgDia = "";
// let msgHora = "";

if (bussinesHours(parseInt(dia.value), hora.value, parseInt(diaEnero.value))){
    message="Es día habil u horario hábil";

} else { 
    message ="No es día hábil u horario hábil";

}
        resultado.innerHTML = message;


});

function bussinesHours (dayYear, hour, diaEnero){
    let dayWeek = ((dayYear-diaEnero -1) % 7);
    console.log( dayYear % 7 );
    let res;
    if ((dayWeek <=0) || (dayWeek >=6) || (hour<9) || (hour>18)){
        res=false;
    } else {
        res=true;
    } return res;
}

//
