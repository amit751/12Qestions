const int1 = Number(prompt("hi plese type 2 positive numbers,the first:"));
const int2 = Number(prompt("the second:"));
let maxd = 0;

for( let i=0 ; i<=int1 || i<=int2 ; i++){
    if( int1%i===0 && int2%i===0 ){
        if(i>maxd){
            maxd=i;
        }
    }
}
console.log(maxd);
alert(maxd);