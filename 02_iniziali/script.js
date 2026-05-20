/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const nomi = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function prendiIniziali(listaNomi) {
    // .map prende ogni "singoloNome" dalla "listaNomi" e ne estrae la prima lettera
    return listaNomi.map(singoloNome => singoloNome.charAt(0));
}


// Invoca la funzione qui e stampa il risultato in console
const arrayIniziali = prendiIniziali(nomi);
console.log(arrayIniziali);


// Risultato atteso: ["A", "L", "M", "A", "G", "A"]