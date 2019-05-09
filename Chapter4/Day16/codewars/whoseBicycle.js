function whoseBicycle(diary1, diary2, diary3) {
    // good luck
var temp = []

    jumlah = 0
    for(var key in diary1){
        jumlah += diary1[key];
    } temp.push(jumlah)

        jumlah = 0
        for(var key in diary2){
            jumlah += diary2[key];
        } temp.push(jumlah)
    
            jumlah = 0
            for(var key in diary3){
                jumlah += diary3[key];
            } temp.push(jumlah)

console.log(temp);
    if ((temp[2] >= temp[1])&&(temp[2] >= temp[0])){
        return 'I need to buy a bicycle for my third son.'
    } else if ((temp[1] >= temp[0])&&(temp[1] >= temp[2])){
        return 'I need to buy a bicycle for my second son.'
    } else if ((temp[0] > temp[1])&&(temp[0] > temp[1])){
        return 'I need to buy a bicycle for my first son.'
    }
}

console.log(whoseBicycle(
    {   'algebra': 1,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {   'algebra': 3,
        'history': 5,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {   'algebra': 5,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
    }
))

console.log(whoseBicycle(
    {   'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {   'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {   'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
    }
))