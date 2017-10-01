'use strict';
function fib(n){
    if(n===0){
        return 0;
    }else if(n===1){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}
const length = 40;
for(let i = 0; i <= length; i++){
    console.log(fib(i));
}


/* 自力で実装バージョン
const f0 = 0;
const f1 = 1;
var fn = new Array(40);
for ( let n = 0 ; n <=40 ; n++){
    if(n === 0){
        fn[0] = f0;        
        console.log(fn[n] + ',');
    }else if(n === 1){
        fn[1] = f1;        
        console.log(fn[n] + ',');
    }else{
        fn[n] = fn[n-1] + fn[n-2];             
        console.log(fn[n] + ',');
    }
}
*/