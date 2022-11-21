dot_function= x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
var Procent = function(x,y){ //case 1
    let answer = (x/100)*y;
    return answer;
}

var Factorial  = function(x){ //case 2
    let i =1
    let answer=1
    for(i;i<=x;i++){
        answer=answer*i
    }
    return answer
}   

var Dohod = function(x,y,period){ //case 3
    let revenue;
    revenue = x*Math.pow(1+y/365,period)
    return revenue
    }
var glasn = function(str){ //case 4
    let counter = 0
    const vowels =[ 'а','у','є','и','і','ї','о','у','ю','я','a','e','i','o','u'];
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            counter = 1 
        }
    return counter
    }
}
 /*
 function glasn(str)
{
  if (char.length == 1)
  {
    return /[aeiou]/.test(str);
  }
}*/
    
var sogl = function(str){ //case 5
        let counter = 1;
        const vowels =[ 'а','у','є','и','і','ї','о','у','ю','я','a','e','i','o','u'];
        for(let char of str.toLowerCase()){
            if(vowels.includes(char)){
                counter = 0; 
            }
        return counter
        }    
}

var ramka = function(h,x){ //case 6
    let counter = h-2
    var x_middle="0"
    var x_ends ="0"
    for(let i=0;i<x;i++){
        var x_ends=x_ends+"0"
    }
    for(let i=0;i<x;i++){
         if(i==x-1){
            x_middle=x_middle+"0"
            continue;
        }
        x_middle=x_middle+" "
    }
    console.log(x_ends)
    for(let i=0;i<counter;i++){
        console.log(x_middle)
    }
    console.log(x_ends)
    //return x_middle;
    //return x_ends;
}


function pow(x, n) { //case 7
    let result = x;
    result=Math.pow(x,n)
    return result;
  }

 let square = function(a,b,c){ //case 8
    let dic=b*b-4*a*c
    if(dic<0){
        console.log("коренів нема")
    }else if(dic==0){
        let x1 = (-b)/(2*a)
        return x1
    }else if(dic>1){
        let x1 = (-1*b+Math.sqrt(dic))/(2*a)
        let x2 = (-1*b-Math.sqrt(dic))/(2*a)
        
        return {
            x1: x1,
            x2: x2
        }
    }
    
}

let same_line = function(a,n){ //case 9
    let line = a
    for(let i=1;i<n;i++){
        line=line+a
    }
    return line
}

let  parallelepiped = function(a,b,c){
    let square = 2*(a*b+a*b+a*c)
    let volume = a*b*c

    return {
     square: square,
     volume: volume
    }
}


let n = parseInt (prompt ("Ведіть номер задачі:",));
if(0<n<11){
switch(n){
    case 1:
        let x = parseFloat (prompt ("Ведіть число:",));
        let y = parseFloat (prompt ("Ведіть процент:",));
        if(isNaN(x)||x<0 ||isNaN(y) || isNaN(x)){
            alert("помилка")
         }else{
            let answer=Procent(x,y)
            console.log("Відповідь="+answer)
         } 
        

    break;

    case 2:
         x = parseFloat (prompt ("Ведіть число:",));
         if(isNaN(x)||x<0){
            alert("помилка")
         }else{
            answer=Factorial(x)
            console.log(answer)
         }
    break;
    
    case 3:
    x=parseFloat (prompt ("величина вкладу,:",));
    y=parseFloat (prompt ("процентна ставка:",));
    let period=parseFloat (prompt ("термін вкладу:",));
    
    if(isNaN(x)||x<=0||isNaN(y)||y<=0||isNaN(n)||n<=0){
        alert("Eror")
    }else{
        answer = Dohod(x,y,period)
        console.log("Доход="+period)
    }

    break;

    case 4:
       let x_case4 =prompt ("Введить букву",);
        if(isNaN(x_case4)){
            if(glasn(x_case4)==1){
                console.log("Буква-"+x_case4+"-гласна")
            }else if(glasn(x_case4)==0){
                console.log("Буква-"+x_case4+"-не гласна")
            }
        }
    
    break;

    case 5:
        let x_case5=prompt ("Введить букву",);
        if(isNaN(x_case5)){
            if(sogl(x_case5)==1){
                console.log("Буква-"+x_case5+"-глуха")
            }else if(sogl(x_case5)==1){
                console.log("Буква-"+x_case5+"-не глуха")
            }
        }
    
    break;

    case 6:
        x=parseFloat (prompt ("Введить довжину",));
        y=parseFloat (prompt ("Введить ширину",));
        if(isNaN(x)||x<=0||isNaN(y)||y<=0){
            alert("Eror")
        }else {
            console.log(ramka(x,y))
        }
    
    break;

    case 7:
        a=parseFloat (prompt ("Введить число",));
        b=parseFloat (prompt ("Введить степінь",));
        if(isNaN(a)||isNaN(b)) {
            alert("Eror")
        }else if(a==0 && b==0){
            alert("Math problem")
        }else{
            answer=pow(a,b)
            console.log("Відповідь:"+answer)
        }
    
    break;
    
    case 8:

        a=parseFloat (prompt ("Введить коофіцієнт а",));
        b=parseFloat (prompt ("Введить коофіцієнт b",));
        c=parseFloat (prompt ("Введить коофіцієнт c ",));
        
        if(isNaN(a)||isNaN(b)||isNaN(c)) {
            alert("Eror")
        }else{
            answer=square(a,b,c)
            let answer_x1=answer.x1
            let answer_x2=answer.x2
            console.log("відповідь x1="+answer_x1)
            console.log("відповідь x2="+answer_x2)
        }
    
    break;
    
    case 9:
        a=prompt ("Введить знак",);
        b=parseInt (prompt ("Введить кількість символів в ряду",));
        if(isNaN(a) && b>0){
            answer=same_line(a,b)
            console.log(answer)
        }else{
            alert("Eror")
        }    
    break;

    case 10:
    let a =parseFloat (prompt ("Введить висота",));
    let b =parseFloat (prompt ("Введить довжину",));
    let с =parseFloat(prompt ("Введить довжину",));
    if(isNaN(a)|| a<=0 ||isNaN(b)|| b<=0 ||isNaN(c)|| c<=0 ) {
        alert("Eror")
    }else{
        answer=parallelepiped(a,b,c)
        let answer_square=answer.square
        let answer_volume=answer.volume
        console.log("Площа поверхні дорівнює:"+answer_square)
        console.log("Об`єм дорівнює:"+answer_volume)
    }
    break    
}
}

