

let happyNumbersCount =0;

function sumSquareDigits(num){
    const numString= num.toString();
    let sum=0;
    for(let i=0 ; i < numString.length ; i++){
        const digit = Number(numString.slice(i,i+1));
        sum += digit**2;
    }
    return sum;
}


for( let i=1 ; happyNumbersCount!==5 ; i++){
    const history = [];
    
    let current = i;

   while(true){
        const sum = sumSquareDigits(current);
        if(sum===1){
            console.log(i + " is happy.");
            happyNumbersCount++;
            break;
        }
        if(history.includes(sum)){
            console.log( i+ " is sad");
            break;

        } 

        history.push(sum);
        current=sum;
    }
}









