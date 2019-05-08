var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

function exercise2(text) {
    var index = text.split(',');
    var temp = [];

        for(a=0;a<index.length;a++){
            var zz = index[a].split(':');
            temp.push(zz)
        }
    console.log(temp);
}
console.log(exercise2(text));
// [
//     ['dimitri', 'dimitri@mail.com', 'male'],
//     ['icha', 'icha@mail.com', 'female'],
//     ['windi', 'windi@mail.com', 'female']
//   ]