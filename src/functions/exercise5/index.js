const numbers = [11,9,13,12]

// Put your code here

function minorInRange(idx1,idx2,array){
    for(i=idx1; i<=idx2; i++){
        numMenor=null;
        if (array[idx1] < array[idx1+1]){
            numMenor=array[idx1];
        }
        else {
            numMenor=array[idx1+1];
        }
    }
    return numMenor;
}

console.log("");
console.log("Este es el array de muestra", numbers);
console.log("");
console.log("El número menor entre los índices 0 y 3 es el :", minorInRange(0,3,numbers));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 2 y 3 es el :", minorInRange(2,3,numbers));
console.log("--------------------------------------------------")
console.log("");
console.log("El número menor entre los índices 1 y 3 es el :", minorInRange(1,3,numbers));
console.log("--------------------------------------------------")