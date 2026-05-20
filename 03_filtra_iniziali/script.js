/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraIniziali(arr, lettere) {
    return arr. filtra(nome => nome.charAt(0) === lettere);
}
    

// Invoca la funzione qui e stampa il risultato in console
const filtrateNomi = filtraIniziali(names, 'A');



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]