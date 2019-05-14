function csvToObject (text) {
var split = text.split(',')
var temp = {}
    for(i = 0; i < split.length; i++){
        temp.name = split[0]
        temp.email = split[1]
        temp.gender = split[2]
    }
return temp
}

  // TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
  // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
//   // { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
//   // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }