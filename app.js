'use strict';
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if(memo.has(n)){
        return memo.get(n);
    }
    const value = fib(n-1)+fib(n-2);
    memo.set(n, value);
    return value;
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