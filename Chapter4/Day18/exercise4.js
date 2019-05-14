function palindrom(name) {
var length = name.length -1
    if (name.length == 0){
        return name + ' is ' + true
    } else
    var depan = name[0]
    var belakang = name[length]
        if (depan !== belakang) {
            return name + ' is ' + false
        } else
        return palindrom(name.slice(1,length))
}
console.log(palindrom('angga'));
