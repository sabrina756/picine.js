// Exercice 1: Trouver le plus grand nombre dans un tableau
const arr = [23, 34, 77, 99, 324];

let pgn = arr[0] ;
for (let i = 0 ; i < arr.length; i++) {
    
    if(arr[i]>pgn){
        pgn = arr[i];
    }
   
   }
    console.log(pgn);