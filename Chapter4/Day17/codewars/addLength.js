function addLength(str) {
    //start-here
var temp = []
var split = str.split(' ')
    for(i = 0; i < split.length; i++){
        var name = split[i]
        var angka = split[i].length
        var nilai = name + ' ' + angka
        temp.push(nilai)
    }
    return temp
}
console.log(addLength('apple ban'));