function deleteUndefinedKeys (object) {
    // Your code here
    var temp = {}
    for(key in object){
        if (object[key] != undefined) {
            temp[key] = object[key]
            // delete object.age // delete object[key]
        }
    }
    return temp
  }
  
  console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
  }));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
  }));
  // {}