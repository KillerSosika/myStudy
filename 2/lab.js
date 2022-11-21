let n = parseInt (prompt ("Ведіть номер задачі:",));
let Error = false
let i = 0
    while(Error==false && i==0 && 0<n<11){
        switch(n){

         
    case 1:
        
                dividend = parseFloat (prompt (" Ведіть ділене:",));
                divisor  = parseFloat(prompt("Ведіть дільник:",));
                
                if (isNaN(dividend) || isNaN(divisor)) {
                alert("Вы ввели не число!");
                Error= true;
                i++
                }
    break; 
            
    case 2:
            
                let i_case2=0//тільки для перевірки данних другого кейсу
                FirstResist  = parseFloat (prompt ("Ведіть перший опір:",));
                SecondResist = parseFloat (prompt ("Ведіть другий опір:",));
            
                if (isNaN(FirstResist) || isNaN(SecondResist)) {
                alert("Вы ввели не число!");
                Error= true;
                i++ ,i_case2++
                }else if(FirstResist<0||SecondResist<0){
                alert("Помилка данних(від'ємне число)");
                Error= true;
                i++ ,i_case2++
                }else if(FirstResist==0){
                    alert("Загальний опір"+SecondResist)
                    i++ ,i_case2++
                }else if(SecondResist==0){
                    alert("Загальний опір"+FirstResist)
                    i++ ,i_case2++
                }
                while(i_case2==0){
                    TaskResist = parseInt (prompt ("Що треба порахувати(1-послідовний;паралельний ):",));
                        if(TaskResist==1||TaskResist==2 ){
                            i_case2++
                        }else{
                            alert("Помилка вводу,повторіть спробу");
                        }
                }
    break; 
            
    case 3:
                time = parseFloat (prompt ("Ведіть час у вигляді хвилини.секунки через крапку ",));
                console.log(time)
                
                if (isNaN(time)) {
                alert("Вы ввели не число!");
                Error= true;
                i++
                }
                
    break; 
           
    case 4: 
                year = parseInt (prompt ("Ведіть рік:",));
                let examination_case4=year-Math.floor(year)
                if (isNaN(year)|| examination_case4>0) {
                    alert("Некоретні данні");
                    Error= true;
                    i++
                    }
            
    case 5:
                coefficient1 = parseFloat (prompt ("Ведіть коєфіціент 'a' :",));
                coefficient2 = parseFloat (prompt ("Ведіть коєфіціент 'b' :",));
                coefficient3 = parseFloat (prompt ("Ведіть коєфіціент 'c' :",));

                if (isNaN(coefficient1)|| isNaN(coefficient2) || isNaN(coefficient3)) {
                    alert("Вы ввели не число!");
                    Error= true;
                    i++
                    }
            
    break;
            
    case 6:
                purchase_amount = parseFloat (prompt ("Введіть суму покупки (грн.)",));
                
                if (isNaN(purchase_amount)) {
                    alert("Вы ввели не число!");
                    Error= true;
                    i++
                    }
    break;

                    
    case 7: 
                height = parseFloat (prompt ("Введіть зріст(см):",));
                weight = parseFloat (prompt ("Ведіть вагу (кг),:",));
                let i_case7 = 0;

                if (isNaN(height)|| isNaN(weight)) {
                    alert("Вы ввели не число!");
                    Error= true;
                    i++, i_case7++
                    }else if(height<150){
                        alert("Вибачаємося,розрахованна на повністю здорову,дорослу люди")
                        i++, i_case7++
                    }
                    while(i_case7==0){
                        sex = parseInt(prompt("Ведіть вашу стать (1-чоловік;2-жінка)",));
                            if(sex == 1||sex == 2 ){
                                i_case7++
                            }else{
                                alert("Помилка вводу,повторіть спробу");
                            }
                    }
                    //console.log(typeof(sex),i_case7)
    break;    
            
    case 8: 
                month_number = parseInt (prompt ("Введіть номер місяця",));
                let examination_case8 = month_number-Math.floor(month_number)
                if (isNaN(month_number) || examination_case8>0) {
                    alert("Некоретні данні");
                    Error= true;
                    i++
                    }else if(month_number<=0 ||  13<=month_number){
                        alert("некоректний номер місяця")
                        i++
                    }
    break;
    
    case 9: 
                day_number = parseInt (prompt ("Ведіть номер дня тижня:",));
                let examination_case9=day_number-Math.floor(day_number)
                
                if (isNaN(day_number) || examination_case9>0) {
                    alert("Вы ввели не число!");
                    Error= true;
                    i++
                    }
    break;
            
    case 10:
            
                alert("Архітектор Ісаакіївського собору: \n 1. Доменіко Трезини \n 2.Огюст Монферран \n 3.Карл Россі ");
                
                let historyanswer = parseInt (prompt ("Ведіть відпоідь :",));
                historyanswer=Number(historyanswer)
                if(historyanswer == 1 || historyanswer == 3){
                        alert("Невірна відповідь")
                        i++
                }else if(historyanswer == 2){
                        alert("Вірна відповідь")
                        i++
                }else{
                    alert("помилка данних")
                    console.log(historyanswer)
                    i++
                    Error=true;
                    }
     break;
                    
                
        
         }        
        
        if(Error!=true){
        switch(n){  
            case 1:
                if(divisor == 0){
                    alert('You are cannot divete by zero')
                    i++
                }else
                    alert(dividend/divisor)
                    i++
            break;

            case 2 :
                if(TaskResist==1){
                    let summ;
                    summ=FirstResist+SecondResist
                    alert("Опір дорівнює:"+summ)
                    i++
                }else if(TaskResist==2){
                    let numerator,pronoun,summ;
                    numerator=FirstResist*SecondResist;
                    pronoun=FirstResist+SecondResist;
                    summ=numerator/pronoun
                    alert("Опір дорівнює:"+summ.toFixed(2))
                    i++
                }
            break;   
        
            case 3: 
                let time_fraction,time_whole;
                if(Number.isInteger(time)==true){
                    time_fraction=0;
                    time_whole=time;
                }else if(Number.isInteger(time)==false){
                    time_fraction=time-Math.floor(time)
                    time_fraction=time_fraction.toFixed(2)
                    time_whole=Math.floor(time)   
                }
                if(time_fraction>0.6){
                    alert("Помилка");
                    i++
                }  else{
                    time_fraction = Number(time_fraction)
                    time_whole=time_whole*60
                    time_fraction=time_fraction*100
                    time=time_whole+time_fraction
                    alert("Час в секндах:"+time)
                    i++     
                }
            break;
                
            case 4:
                if(year%4==0){
                    alert( year + "-високосний ")
                    i++
                }else if(year%4!=0){
                    alert(year + "-не високосний")
                    i++
                }
            break;

            case 5:
                 let answer_1,answer_2;
                 let discriminant = Math.pow(coefficient2,2)-4*coefficient1*coefficient3;
                 if(discriminant<0){
                    alert("error")
                    i++
                 }else if(discriminant==0){
                    coefficient1==2*coefficient1 
                    coefficient2== -1*coefficient2
                    answer_1=coefficient2/coefficient1
                    alert("x= "+answer_1)
                    i++
                }else if(discriminant>0){
                    coefficient1==2*coefficient1  
                    coefficient2== -1*coefficient2
                    answer_1 = (coefficient2-Math.sqrt(discriminant))/coefficient1
                    answer_2 = (coefficient2+Math.sqrt(discriminant))/coefficient1
                    alert( "x1 = " + answer_1 +" x2 = " +answer_2)
                    i++
                }
            break;

            case 6:
                  answer_purchase = purchase_amount
                 if(purchase_amount>1000){
                 answer_purchase = purchase_amount-purchase_amount*0.1
                    alert("Ціна зі знижкою"+answer_purchase.toFixed(2))
                    i++
                }else if(purchase_amount<=1000){
                    alert("Сума вашої покупки недостатня для знижки,до сплати" +answer_purchase.toFixed(2))
                    i++
                }
            break;

            case 7:
            let perfect_weight=height
            let need_weight; 
            if(sex==1){
                perfect_weight=perfect_weight-100
            }else if(sex==2){
                perfect_weight=perfect_weight-110     
            }
            need_weight=perfect_weight-weight
            if(need_weight<0){
                alert('Вам потрібно скинути ' +Math.abs(need_weight)+ ".кг")
                i++
            }else if(need_weight>0){
                alert('Вам потрібно набрати '+need_weight + " .кг")
                i++
            }else if(need_weight==0){
                alert("У вас ідеальна масса")
                i++
            }
            break;

            case 8:
                if(month_number == 12|| month_number == 1 || month_number == 2){
                alert(month_number + "-це зимма")
                i++
                }else if(month_number == 3|| month_number == 4 || month_number == 5){
                 alert(month_number + "-це весна")
                i++
                }else if(month_number == 6 || month_number == 7 || month_number == 8 ){
                alert(month_number + "-це літо")
                i++
                }else if (month_number == 9 || month_number == 10 || month_number == 11 ){
                alert(month_number + "-це осінь ")
                i++
                }
            break;

            case 9:
            if(day_number == 1 || day_number == 2 || day_number == 3 || day_number == 4 || day_number == 5){
                alert("Робочій день")
                i++
            }else if(day_number == 6){
                alert("Суботта")
                i++
            }else if (day_number == 7){
                alert("Неділя")
                i++
            }else{
                alert("помилка данних")
                    throw new Error();
            }
            break;

            case 10:
            break;
           
        }
    }
}