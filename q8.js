// let qr =0;
// let sum;
// let d=0;
// let csum;
// const arr1=[""];
// for( let i=0 ; qr!==5 ; i++){
//     let stringNumber= i.toString();
//     let numLenght=stringNumber.length;
//     for( let a=0 ; a<numLenght ; a++){
//         let digit=stringNumber.slice(a,a+1);
//         sum += digit**2;
//     }
//     if(sum===1){
//         console.log(i + " is happy.");
//         qr++;
//     }
//     else{
//         for( let g=0 ; g<arr1.length ; g++){
//             if(sum===arr1[g]){
//                 console.log( i+ " is sad");
//             }else{
//                 arr1[d]=sum;
//                 d++;
                
//             }
//         }
//     }
// }



let msg;
let csum;
let x;
let sum;
let qr =0;
let arr1=[];
let d;

function digits(csum){
    let stringCsum= csum.toString();
    let csumLenght=stringCsum.length;
    for( let a=0 ; a<csumLenght ; a++){
        let digit=stringCsum.slice(a,a+1);
        sum += digit**2;
        
    }
    return sum;
}


for( let i=0 ; qr!==5 ; i++){
    arr1=[];
    d=0;
    msg=0;

   while(msg=0){
        x = digits(i);
        if(x===1){
            console.log(i + " is happy.");
            qr++;
            msg= 1;
        }
        else{
            for( let g=0 ; g<arr1.length ; g++){
                if(x===arr1[g]){
                    console.log( i+ " is sad");
                    msg= 1;
                    break;
                }
            }
                
                
            arr1[d]=x;
            d++;
            i=x;
                    
                
            
        }
    }
}









