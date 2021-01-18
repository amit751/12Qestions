const number1 = Number(prompt("hi plese type 3 numbers,the first:"));
const number2 = Number(prompt("the second:"));
const number3 = Number(prompt("the third:"));

const max = Math.max( number1 , number2 , number3);
const min = Math.min(number1 , number2 , number3);


switch(max){
    case number1:
        if(number2 > number3){
            alert(number1 +", "+ number2 +", "+ number3);  
        }else{
            alert(number1 +", "+ number3 +", "+ number2); 
        }
        break;
    
    case number2:
        if(number1>number3){
            alert(number2 +", "+ number1 +", "+ number3); 
        }else{
            alert(number2 +", "+ number3 +", "+ number1);
        }
        break; 
    case number3:
        if(number1>number2){
            alert(number3 +", "+ number1 +", "+ number2); 
        }else{
            alert(number3 +", "+ number2 +", "+ number1);
        }
        break; 
}





















