const number = Math.random()*10;
console.log(number)
const num = Math.random()*100
console.log(num)
const floor= Math.floor(num);
console.log(floor)
//if else
//

if (number %2 == 0){
    console.log('even');
}else{
    console.log('Odd');
}
//if (num % 5==0 && num !=0){
   // console.log('Even');
//}
//elif if (num=0){
   // console.log('Even')
//}
//else{
    //console.log('Odd')
//}
let i =floor;
for (i;i<20;i++) {
    console.log(i);
}

while(i<=30){
    console.log(i);
i++;
}
let i1=floor;
switch (i1){
    case 5: 
    console.log("BUZZ");
    break;
    case 0:
     console.log("ZERO");
     break;
    default: 
    console.log("FIZZ");
break;
}
function greet(name,query){
    let call= ("hello"+" " +name+ " "+query);
    console.log(call);
}

greet("santhiya", "how are you")