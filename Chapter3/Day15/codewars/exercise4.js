//https://www.codewars.com/kata/5768a693a3205e1cc100071f

function initializeNames(name){
    var split = name.split(' ');
    var length = split.length -1
    var temp = '';
    // console.log(split);
    
    if(split.length > 2){
        for(i = 0; i < split.length ; i++){
            if(i == 0){
                temp += split[i]
            } else if (i == length) {
                temp += ' ' + split[i];
            } else
                temp += ' ' + split[i][0] + '.'
        }
    } else
        return name
    
    return temp
    }