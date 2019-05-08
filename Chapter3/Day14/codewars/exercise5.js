// https://www.codewars.com/kata/57ce0c634001a5f3c7000006


function dateChecker(date){
    console.log(date)
      var t = date.split('');
      var z = t.length
      console.log(z)
        if(t[2] == '-' && t[5] == '-' && t[13] == ':'){
          return true
        } else {
          return false
        }
    }