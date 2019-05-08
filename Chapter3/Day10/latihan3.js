function numberProcessing(numberArr) {

    var evens = [];
    var odds = [];
    for (var i = 0; i < numberArr.length; ++i) { 
        if ((numberArr[i] % 2) === 0) {
            evens.push(numberArr[i]);
        } else
            odds.push(numberArr[i]); 
    }

        var sort = numberArr.sort (function(a,b) { return a-b });
        var min = Math.min(...sort);
        var max = Math.max(...sort);

            var mean = 0;        
            for( var i = 0; i < sort.length; i++ ){
                mean += (sort[i]);
            }
            var avg = mean/sort.length;
            var avg2 = avg.toFixed(2);

    console.log('[' + sort.join(', ')+']');
    return 'Min: '+min+', '+'Max: '+max+', '+'Mean: '+avg2+', '+'odds: '+(odds.join('-'))+', '+'evens: '+(evens.join('-'))

    }

   console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"