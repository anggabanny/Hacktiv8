function unikNumber(numbers) {
    var modus = []
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
                if (count[i] == 1) {
                    modus.push(Number(i));
                }
            }
        return modus;
}
console.log(unikNumber([1,1,1,2,1,1,1]));
console.log(unikNumber([1,2,1,2,3,4,5]));