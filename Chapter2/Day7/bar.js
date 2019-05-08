var name = 'angga';
    age ='18';
    money ='400000';

    if (name == ''){
        console.log('anda tidak boleh masuk');
    } else if (name !=''){
        console.log('Hai ',name);
        var juice = 50000;
            anggur = 300000;
                if(age < 17){
                    if(money>=50000){
                        console.log('anda hanya bisa membeli "juice"','\nuang anda sekarang', money,'\nharga juice =',juice);
                        money = money - juice;
                    } else {
                        console.log('uang anda tidak mencukupi');
                    }
                } else {
                    if(money >=300000){
                        console.log('anda hanya bisa memesan "anggur",', '\nuang anda sekarang', money,'\nharga anggur=',anggur);
                        money = money - anggur;
                    } else {
                        console.log('uang anda tidak mencukupi');
                    }
                }
            console.log('sisa uang anda :',money,'\nTerimakasih')
        }