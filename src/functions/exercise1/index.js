const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];

function minorValue(array) {

    // Put your code here
    array.sort(function(a, b){return a - b});
    return array[0];

}

const minor1 = minorValue(numbers1);
console.log('El número menor del Array "Numbers1" es :', minor1);
console.log('El número menor del Array "Numbers2" es :', minorValue(numbers2));
console.log('El número menor del Array "Numbers3" es :', minorValue(numbers3));
console.log('El número menor del Array "Numbers4" es :', minorValue(numbers4));