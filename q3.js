let number1 = prompt("hi plese type 3 numbers,the first:");
let number2 =prompt("the second:");
let number3 =prompt("the third:");

Number.number1;
Number.number2;
Number.number3;

let max = Math.max( number1 , number2 , number3);
let min = Math.min(number1 , number2 , number3);

if(number1 !== max && number1 !== min){
    alert(max +", "+ number1 +", "+ min);
}
if(number2 !== max && number2 !== min){
    alert(max +", "+ number2 +", "+ min);
}
if(number3 !== max && number3 !== min){
    alert(max +", "+ number3 +", "+ min);
}





// alert ("max is"+ max +" min is " +min);




// switch(max){
//     case number1:
//         if(min===number2){
//             alert(number1 +", "+ number3 +", "+ number2);
//         }
//         else{
//             alert(number1 +", "+ number2 +", "+ number3);
//         }break;
//     case number2:
//         if(min===number1){
//             alert(number2 +", "+ number3 +", "+ number1);
//         }
//         else{
//             alert(number2 +", "+ number1 +", "+ number3);
//         }break;
//         case number3:
//             if(min===number1){
//                 alert(number3 +", "+ number2 +", "+ number1);
//             }
//             else{
//                 alert(number3 +", "+ number1 +", "+ number2);
//             }break;
//         default:
//             alert(number3 +", "+ number1 +", "+ number2);


         
// }