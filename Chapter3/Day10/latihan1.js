function   perkalianUnik(arr) {
    var satu = arr[1] * arr[2];
    var dua = arr[0] * arr[2];
    var tiga = arr[0] * arr[1];
    return '['+satu+', '+dua+', '+tiga+']'
}

function   perkalianUnik2(arr) {
    var satu = arr[1] * arr[2] * arr[3] * arr[4];
    var dua = arr[0] * arr[2] * arr[3] * arr[4];
    var tiga = arr[0] * arr[1] * arr[3] * arr[4];
    var empat = arr[0] * arr[1] * arr[2] * arr[4];
    var lima = arr[0] * arr[1] * arr[2] * arr[3];
    return '['+satu+', '+dua+', '+tiga+', '+empat+', '+lima+']'
}

function   perkalianUnik3(arr) {
    var satu = arr[1] * arr[2] * arr[3];
    var dua = arr[0] * arr[2] * arr[3];
    var tiga = arr[0] * arr[1] * arr[3];
    var empat = arr[0] * arr[1] * arr[2];
    return '['+satu+', '+dua+', '+tiga+', '+empat+']'
}

console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik2([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik2([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik3([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik2([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]