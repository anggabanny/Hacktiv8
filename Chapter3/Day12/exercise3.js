var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

function mode(numbers) {
    var modes = []
    var count = []
    var maxIndex = 0;
 
    for (i = 0; i < numbers.length; i++) {
        angka = numbers[i];
        count[angka] = (count[angka] || 0) + 1;
            if (count[angka] > maxIndex) {
                maxIndex = count[angka];
            }
    }
    
    for (i in count)
        if (count.indexOf(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    return modes;
}
console.log(mode(numbers));