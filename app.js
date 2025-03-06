let amigos = [];
let mostrarAmigo = document.getElementById("resultado");

function agregarAmigo(){
    mostrarAmigo.innerHTML = "";
    let nombreAmigo = document.getElementById("amigo").value.trim();
    
    if(nombreAmigo == ""){
        alert("El campo está vacio");
    }
    else{
        amigos.push(nombreAmigo);
        console.log(amigos);
        mostrarAmigos();
    }
    limpiarInput();
}

function limpiarInput(){
    let caja = document.getElementById("amigo");
    caja.value = "";
}

function mostrarAmigos(){
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        listaDeAmigos.innerHTML += `
        <li>${amigos[i]}</li>
        `;
    }
}

function sortearAmigo(){

    if (amigos.length > 0){
        let posicionAmigo = parseInt(Math.trunc(Math.random() * amigos.length));
        let amigoSecreto = amigos[posicionAmigo];

        amigos.splice(posicionAmigo, 1);

        mostrarAmigos();

        return mostrarAmigo.innerHTML = `
        <li>${amigoSecreto}</li>`;
    }
    else{
        return mostrarAmigo.innerHTML = "No hay amigos para sortear";
    }
}