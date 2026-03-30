const img = document.getElementById("main");
const btn = document.getElementById("btn");
const statusTxt = document.getElementById("status");

const estados = {
    normal: "GATO.png",
    comendo: "gato1.png",
    feliz: "feliz.png",
    fome30: "fomeleve.png",
    fome60: "fome.png",
    morte: "MORREU.png"
}

let contador = 0;
let intervalo = null;
let morto = false;

function initConta(){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {

        if(morto) return;

        contador++;

        console.log("Tempo:", contador);

        if(contador >= 30 && contador < 60){
            img.src = estados.fome30;
            statusTxt.innerText = "Status: Com fome 😿";
        }

        if(contador >= 60 && contador < 100){
            img.src = estados.fome60;
            statusTxt.innerText = "Status: Muita fome 😾";
        }

        if(contador >= 100){
            img.src = estados.morte;
            statusTxt.innerText = "Status: Morreu 💀";
            morto = true;
        }

    }, 1000);
}

function alimenta(){
    if(morto) return;

    img.src = estados.comendo;
    statusTxt.innerText = "Status: Comendo 🍓";

    // reset fome
    contador = Math.max(0, contador - 40);

    setTimeout(() => {
        img.src = estados.feliz;
        statusTxt.innerText = "Status: Feliz 😸";
    }, 500);

    setTimeout(() => {
        img.src = estados.normal;
        statusTxt.innerText = "Status: Saudável 😺";
    }, 1500);
}

initConta();