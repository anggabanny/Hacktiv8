// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab

function well(x){
    console.log(x)
    var nilai = 'fail!'
    count = 0;
        for(i = 0; i < x.length; i++){
            for(j = 0; j < x[i].length; j++){
            netral = x[i][j].toString().toLowerCase();
                if(netral == 'good'){
                    count ++
                }
            }
            if(count > 2){
                nilai = 'I smell a series!'
            } else if (count >=1){
                nilai = 'Publish!'
            } else
                nilai = 'Fail!'
        }
        return nilai
    }