console.log('----------------Cara 1---------Loop--------');
function reverse(name) {
    var rever = name.split('').reverse().join('')
    console.log(rever);
}
console.log(reverse('abc'));

console.log('----------------Cara 2-------Loop----------');
function reverse(name) {
var temp = ''
var split = name.split('')

    for(i = split.length -1; i >= 0; i--){
        temp += split[i]
    }
    return temp
}
console.log(reverse('abc'));

console.log('----------------Cara 3--------Rekursif---------');
function reverse(name) {
var length = name.length -1

    if(name.length != 0){
        return name[length] + reverse(name.substring(0,length))
    } else if(name.length == 0){
        return name
    }
}
console.log(reverse('abc'));

console.log('----------------Cara 4-------Rekursif----------');
function reverse(name) {
if(name == ''){
    return ''
}
    return reverse(name.substring(1))+name[0]
}
console.log(reverse('abc'));