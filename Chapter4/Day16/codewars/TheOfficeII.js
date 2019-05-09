function boredom(staff){
var nilai ={
    accounts: 1,
    finance: 2, 
    canteen: 10, 
    regulation: 3, 
    trading: 6, 
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
}
    var jumlah = 0
    for(var key in staff){
        var manipulasi = staff[key]
        jumlah += nilai[manipulasi]
    }

    if(jumlah <= 80){
        return 'kill me now'
    } else if((jumlah <100)&&(jumlah >80)){
        return 'i can handle this'
    } else if (jumlah >= 100){
        return 'party time!!'
    }
    
}

console.log(boredom({tim: 'change', jim: 'accounts',
randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
mr: 'finance' }))