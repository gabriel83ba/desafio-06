const GATO01 = "🐈";
const GATO02 = "🐈🐈"
const PASO01 = "🐾";

let cantidadDeGatos = 10;
let cantidadDePasos = 4;


for (let contadorA = 1; contadorA <= cantidadDeGatos; contadorA++) 
    if (contadorA % 2 === 1) {
    let imprimir = "Gato #" + contadorA + ": " + GATO01 + " ";
    for (let contadorB = 1; contadorB <= cantidadDePasos; contadorB++) {
        imprimir += PASO01;
    }
    console.log(imprimir)
} else {
        let imprimir = "Gato #" + contadorA + ": " + GATO02 + " ";
        for (let contadorB = 1; contadorB <= cantidadDePasos; contadorB++) {
            imprimir += PASO01;
        }
        console.log(imprimir)
}



