let msg;
let csum;
let x;
let sum;
let qr =0;
let arr1=[];
let d;

function sumSquareDigits(csum){
    let stringCsum= csum.toString();
    let csumLenght=stringCsum.length;
    for( let a=0 ; a<csumLenght ; a++){
        let digit=stringCsum.slice(a,a+1);
        sum += digit**2;
        
    }
    return sum;
}


for( let i=1 ; happyNumbersCount!==5 ; i++){
    history=[];
    d=0;
    msg=0;
    

   while(msg=0){
        history[d]=sum;
        d++;
        i=sum;
        sum = sumSquareDigits(i);
        if(sum===1){
            console.log(i + " is happy.");
            happyNumbersCount++;
            msg= 1;
        }
        else {
            for( let g=0 ; g<history.length ; g++){
                if(sum===history[g]){
                    console.log( i+ " is sad");
                    msg= 1;
                    break;
                
                }  
                
            }
        }           
        
                
                
            
                    
                
            
        
    }
}