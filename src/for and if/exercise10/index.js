let numbers = [2,1,4,5,6,3,7,8,1,4,6,8,1,5,7,8,3]

// Put your code here

let temporal=null;
console.log("\nSwith array elements");
for(let item=0; item<numbers.length; item++ ) {
    for ( let idx = 0; idx < numbers.length; idx++ ) {
        if (numbers[idx] > numbers[idx+1]){
            temporal=numbers[idx];
            numbers[idx] = numbers[idx+1]
            numbers[idx+1] = temporal
        }
        
    }
}   
console.log(numbers);

