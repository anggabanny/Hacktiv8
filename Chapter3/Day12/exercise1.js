var people = [[1, 'Dimitri', 'Hacktiv8'],[2, 'Dhani', 'Hacktiv8'],[3, 'Icha', 'Hacktiv8']];
//     console.log('ID:',people[0][0],'Name: ',people[0][1], 'Company: ',people[0][2]);
//     console.log('ID:',people[1][0],'Name: ',people[1][1], 'Company: ',people[1][2]);
//     console.log('ID:',people[2][0],'Name: ',people[2][1], 'Company: ',people[2][2]);
// -------------------------------------------------------------------------------------
function panggil(people) {
    for( i = 0; i < people.length; i++){
        if (i < people.length) {
            var satu = ('ID: ' + people[i][0]);
            var dua = ('Name: '+ people[i][1]);
            var tiga = ('Company: ' + people[i][2]);
        }
    console.log(satu , dua, tiga);
    }
}
    console.log(panggil(people));