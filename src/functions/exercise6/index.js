const numbers = [11,9,13,12]

// Paste your functions here

function swap(idx1,idx2,array){
    let temporal=array[idx1]
    array[idx1]=array[idx2];
    array[idx2]=temporal;
}

function minorInRange(idx1,idx2,array){
    let numMenor=null;
    for(i=idx1; i<=idx2; i++){
        if (array[idx1] < array[idx1+1]){
            numMenor=idx1;
        }
        else {
            numMenor=idx1+1;
        }
    }
    return numMenor;
}

// Put your code here

console.log(numbers);