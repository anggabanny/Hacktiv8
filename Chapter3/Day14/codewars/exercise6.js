// https://www.codewars.com/kata/57faefc42b531482d5000123

// function remove(s){
//   //coding and coding....
//   ss = '';
//   ss += s
//   var satu = ss.match(/!*$/);
//   var dua = /!/g
//     return ss.replace(dua ,'')+satu;
// }
// console.log(remove(['!!hei!']));

// ----------------------------------------------------------

function remove(s){
    var length = s.length-1;
    var temp=''
        for (var i=0; i < s.length; i++){
            if (s[i] !='!') {
                temp += s[i];
            }
        }
        for(j = 0 ; j < s.length ; j++){
            if(s[length] == '!'){
                temp+= s[length]
                length--
            }
        }
return temp;
}
console.log(remove('!h!!'));
