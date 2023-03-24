let diaAño = document.getElementById("diaAño");
let diaEnero = document.getElementById("diaEnero");
let resultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", function(){
    console.log(diaAño.value, diaEnero.value);

    let msg = "";


let res = calcularDia(parseInt(diaAño.value),parseInt(diaEnero.value));
    // console.log(calcularDia(parseInt(diaAño.value),parseInt(diaEnero.value)));

    if (res==0){
        msg="Es Domingo";
      } else if (res==1) {
        msg="Es Lunes";
      } else if (res==2) {
        msg="Es Martes";
      } else if (res==3) {
        msg="Es Miércoles";
      } else if (res==4) {
        msg="Es Jueves";
      } else if (res==5) {
        msg="Es Viernes";
      } else if (res==6) {
        msg="Es Sábado";
      } else {
         msg="No sé"
      }

    resultado.innerHTML = msg;
});
    

   function calcularDia(dia, diaSemana){
    console.log(dia + diaSemana-1);
    console.log( 39 % 7);
    return ( (dia + diaSemana - 1) % 7);
   }

 



// let num = calcularDia (diaEnero,diaAño);  
// if (num == 0 || num == 6) {
//   message = "Fin de semana";
// } else { 
//   message = "Es día laborable"
// }

// resultado.innerHTML = message;