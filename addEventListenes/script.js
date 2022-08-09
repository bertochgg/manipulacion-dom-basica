const form = document.querySelector("#formulario")
const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');

//EventListeners
//Trabaja con dos argumentos
//1.- El nombre del evento que se quiere ejecutar
//2.- Codigo JS o funciones cuando suceda el evento
btn.addEventListener('click', btnOnClick)

//EventListener para formulario
form.addEventListener('submit', btnOnClick)

function btnOnClick(event){
    console.log(event);
    //prevenir el envio de datos, o en general, prevenir el evento que a continuación se realizará
    event.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: "+sumaInputs;
}