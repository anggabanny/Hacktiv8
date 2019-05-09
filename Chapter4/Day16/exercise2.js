function convert (data) {
var data1 = {
    id:0,
    firstname:[],
    lastName:[],
    email:[]
}
var data2 = {
    id:0,
    firstname:[],
    lastName:[],
    email:[]
}

    for(i = 0; i < data.length; i++){
        if (i == 0) {
            for(j = 0; j < data[i].length; j++){
                if (j == 0) {
                    data1.id += data[i][j];
                } else if (j == 1){
                    data1.firstname += data[i][j]
                } else if (j == 2){
                    data1.lastName += data[i][j]
                } else if (j == 3){
                    data1.email += data[i][j]
                }
            }
        } else if (i == 1){
            for(j = 0; j < data[i].length; j++){
                if (j == 0) {
                    data2.id += data[i][j]
                } else if (j == 1){
                    data2.firstname += data[i][j]
                } else if (j == 2){
                    data2.lastName += data[i][j]
                } else if (j == 3){
                    data2.email += data[i][j]
                }
            }
        }
    }
var tampil = [data1,data2]

return tampil
}


  // TEST CASES
console.log(convert([
    [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
    [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
    { id: 2,
        firstName: 'Sergei',
        lastName: 'Dragunov',
        email: 'sergei@mail.com' } ]
  */

// console.log(convert([]));
  // []