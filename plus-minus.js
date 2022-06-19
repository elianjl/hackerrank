'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    let prop1 = 0, prop2 = 0, prop3 = 0;
    let arrNew = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>0){
            prop1 += 1;
        }else if(arr[i]<0){
            prop2 += 1;
        }else{
            prop3 += 1;
        }
    }
    
    prop1 /= arr.length;
    prop2 /= arr.length;
    prop3 /= arr.length;
    
    let propPos = prop1.toFixed(6)
    let propNeg = prop2.toFixed(6)
    let propZer = prop3.toFixed(6)
    
    console.log (propPos + '\n' + propNeg + '\n' + propZer);

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
