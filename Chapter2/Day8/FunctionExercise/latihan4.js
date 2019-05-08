function name(string) {
  var pemisah = "";
  for (var i = string.length - 1; i >= 0; i--) { 
      pemisah += string[i];
  }
  return pemisah;
}
console.log(name('javascript'));