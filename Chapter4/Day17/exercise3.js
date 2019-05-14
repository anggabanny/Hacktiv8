function complexConversion (text) {
    // Your code here
    var pisah = text.split(',')
    var temp = []
    for(i = 0; i < pisah.length; i++){
      var pisah1 = pisah[i].split(':')
      for(j = 0; j < pisah1.length; j++){
        temp.push(pisah1[j])
      }
    }
    var object = {}
    for(a = 0; a < temp.length; a++){
      if(((a+1) % 2 != 0)&&((a+1) !== temp.length -1)){
        object[temp[a]] = temp[a+1]
      }
    }
    console.log(object);
}

  // TEST CASES
  console.log(complexConversion('name:Dimitri,email:dimitri@mail.com,aku:'));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(complexConversion('name:Erwin,gender:male,age:21'));
  // { name: 'Erwin', gender: 'male', age: '21' }
  
  console.log(complexConversion('city:Surabaya,province:East Java'));
  // { city: 'Surabaya', province: 'East Java' }