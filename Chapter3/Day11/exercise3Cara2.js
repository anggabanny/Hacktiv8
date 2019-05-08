function groupAnimals(animals) {
    animals.sort()
    var indeks = 0;
    var temp = [];

    for( i = 0 ; i <= animals.length -1; i++){
        
        if(temp == 0){
            temp.push([animals[i]])
        } else if (temp[indeks][0][0] === animals[i][0]){
            temp[indeks].push(animals[i])
        } else  {
            temp.push([animals[i]])
            indeks++
        }
            
    }
return temp
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['anoa', 'ayam'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam','anjing', 'kuda', 'anoa', 'kancil','kucing', 'unta', 'cicak','unggas']));
  // [ ['anjing', 'anoa', 'ayam'], ['cacing', 'cicak'], ['kuda','kancil'], ['unggas', unta'] ]