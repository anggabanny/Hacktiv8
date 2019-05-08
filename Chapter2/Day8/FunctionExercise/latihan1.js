function name(string) {
  var a = string.toString();
  var b = a.split('');
  var c = b.reverse();
  var d = c.join('')
  console.log(d);

  if(d == string){
    return true
  } else
    return false
}
console.log(name(12320));
console.log(name(12321));
