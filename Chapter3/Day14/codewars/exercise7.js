// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

function solve(arr){
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var split = alphabet.split('')
var newAr = [];

    for(var i = 0; i < arr.length; i++){
        var count = 0
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j].toLowerCase() == split[j]){
            count++;
            console.log(split[j], count);
            }
        }
    newAr[i] = count;
    count = 0;
    }
return newAr;
}
console.log(solve(["abcds"]));
