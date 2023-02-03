function extraValue(arr, key){
    return arr.reduce(function(accum, nextVAlue){
        accum.push(nextVAlue[key]);
    },[]);
    
}

function vowelCount(str){
    let vowel = 'aeiou';
    return str.split('').reduce(function(acc, next){
        let lowerCased = next.toLowerCase()
            if(vowel.indexOf !== -1){
                if(acc[lowerCased]){
                    acc[lowerCased] ++;
                }else{
                    acc[lowerCased] = 1;
                }
            }
           return acc;
           
        },[]);      
}



function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next, index){
        acc[index][key] = value ;
        return acc;
    },arr);

}


function isEven(val){
    return val % 2 === 0;
  }  

function partition(array, callBack){
    //run callback on each val
   return array.reduce(function(accum, nextVal){
        if(callBack(nextVal) === true){
            accum[0].push(nextVal);
        } else {
            accum[1].push(nextVal);
        }
        return acc;
    },[[],[]]);
    
    //if callback[array] = true place in 1st sub arry
    //if callback[array] = false place in 2nd array

}




