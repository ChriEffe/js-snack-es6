/*Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a = 3;
const b = 8;

let newArray = middleArray(array, a, b);
console.log(newArray);

function middleArray(array, min, max) {
        const newArray = [];
        array.forEach((num, i) => {
            if (i > min && i < max) {
                newArray.push(num);
            }
        });
        return newArray
}
