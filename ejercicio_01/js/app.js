const GATO1 = "😺";
const GATO2 = "😸";
const GATO3 = "😹";
let cantidadDeGatos = 7;

for (let contadorA = 1; contadorA <= cantidadDeGatos; contadorA++) {
    if (contadorA % 3 === 1) {
        console.log("Gato # " + contadorA + ": " + GATO1);
    } else if (contadorA % 3 === 2) {
        console.log("Gato # " + contadorA + ": " + GATO2);
    } else {
        console.log("Gato # " + contadorA + ": " + GATO3);
    }
}
