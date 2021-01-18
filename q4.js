

let store =[""];
 store[0] = prompt("hi plese type 5 numbers,the first:");
 store[1] = prompt("the second:");
 store[2] = prompt("the third:");
 store[3] = prompt("the 4th:");
 store[4] = prompt("the 5th:");

 let max = store[0];

 for( let i=1 ; i<5 ; i++){
     if( store[i]>max){
         max= store[i];
     }
    
 }
alert(max);


