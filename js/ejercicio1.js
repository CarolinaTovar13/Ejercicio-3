let dia = document.getElementById("diaTrabajo");
let hora = document.getElementById("horaTrabajo");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(){
console.log(dia.value);
console.log(hora.value);
let msgDia = "";
let msgHora = "";

// if((dia.value) <1 ){
//     msgDia = "Es domingo fin de semana";
// }   else if (dia.value <= 5){
//     msgDia="Es día laborable";
// }   else if (dia.value == 6){
//     msgDia="Es sábado fin de semana";
// } else {
//     msgDia="No esta dentro del rango";
// }
// if((hora.value) <9 ){
//     msgHora = "el horario NO es laborable";
// } else if (hora.value <= 18){
//     msgHora="el horario esta dentro del horario laborable";
// } else {
//     msgHora="el horario EXCEDE el horario de salida";
// }

  // resultado.innerHTML = msgDia + " y " + msgHora;


if (bussinesHours(dia.value, hora.value)){
    message="Es día habil u horario hábil";

} else { 
    message ="No es día hábil u horario hábil";

}
        resultado.innerHTML = message;


});

function bussinesHours (dayNumber, hourNumber){
    let res;
    if ((dayNumber <=0) || (dayNumber >=6) || (hourNumber<9) || (hourNumber>18)){
        res=false;
    } else {
        res=true;
    } return res;
}


