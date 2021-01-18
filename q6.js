const mark1 = Number(prompt("type mark 1:"));
const mark2 = Number(prompt("type mark 2:"));
const mark3 = Number(prompt("type mark 3:"));
const mark4 = Number(prompt("type mark 4:"));
const mark5 = Number(prompt("type mark 5:"));

const avg = (mark1+mark2+mark3+mark4+mark5)/5;
if( avg < 60 ){
    alert("f");
}else if( avg < 70 ){
    alert("d");
}else if( avg < 80 ){
    alert("c"); 
}else if( avg < 90 ){
    alert("b");
}else if( avg <= 100 ){
    alert("a");
}




