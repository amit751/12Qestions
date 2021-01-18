const store =[""];
store[0] = Number(prompt("hi plese type 5 numbers,the first:"));
store[1] = Number(prompt("the second:"));
store[2] = Number(prompt("the third:"));
store[3] = Number(prompt("the 4th:"));
store[4] = Number(prompt("the 5th:"));
let max = store[0];

for( let i=0 ; i<5 ; i++ ){
    if( store[i] > max ){
        max= store[i];
     }
}

alert(max);

