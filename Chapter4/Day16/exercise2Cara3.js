function convert (data) {
    // Your code here
    var temp = []
        if(data.length !== 0){
    for(i=0;i<data.length;i++){
        var tampil = {
            id: 0,
            firstName: '',
            lastName: '',
            email:''
        }
        var j = 0;
        for(key in tampil){
        tampil[key] += data[i][j]
        j++
        }
    temp.push(tampil)
    }
}
    return temp
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
  
  console.log(convert([]));
  // []