const GATO01 = "🐈";
const PASO01 = "🐾";

let cantidadDeGatos = 5;
let cantidadDePasos = 3;


for (let contadorA = 1; contadorA <= cantidadDeGatos; contadorA++) {
    let imprimir = "Gato #" + contadorA + ": " + GATO01 + " ";
    for (let contadorB = 1; contadorB <= cantidadDePasos; contadorB++) {
        imprimir += PASO01;        
    }
    console.log(imprimir)
}

