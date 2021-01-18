let j=0;

for( let i=100 ; i<1000 ; i++ ){
    let stringNum = i.toString();
    let digit1 = stringNum.slice(0,1);
    let digit2 = stringNum.slice(1,2);
    let digit3 = stringNum.slice(2,3);
    if((digit1**3 + digit2**3 + digit3**3)===i){
        
        console.log(i);
    }
}









