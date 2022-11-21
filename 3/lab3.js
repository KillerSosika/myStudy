let n = parseInt (prompt ("Ведіть номер задачі:",));

switch(n){
    case 1:
        alert("Обчислення часткової суми ряду: 1,3,5,7 ...")
        let line= parseInt(prompt("Введіть кількість членів ряду для сумування"))
        let line_summ = 1;
        let line_summator = 1;
        while(line>1){
            line_summator=line_summator+2
            line_summ=line_summ+line_summator;
            line--
    }  
       alert(line_summ)

    break;  
    
    case 2:
    let i= -4  
   
    while(i<4.5) {
       let y=Math.abs(i-2)+Math.abs(i+1);
        console.log("при x="+i+" y дорівнює:"+y)
        i=i+0.5    
    }
        
    break;

    case 3:
        let n_case3 = parseInt (prompt ("Ведіть табличку якого цисла бажаєте побачити:",));

            
                    for(let i=1;i<11;i++){
                        console.log(n_case3*1+"*"+i+"="+i*n_case3)
               
                    }
            break //кінець 3 кейсу
            
            

        case 4:
            let n_case4 = parseInt (prompt ("Введіть ціле число від 0 до 255:",));
            if(0<=n_case4<=255){
            console.log((n_case4).toString(2))
        }else{
            alert("Eror")
        }
            brear;

            case 5:
            let num = parseInt (prompt ("Введіть число, факторіал якого треба вирахувати:",));    
            let rval=1;
                for (let i = 2; i <= num; i++)
                    rval = rval * i;
            console.log("Факторіал "+num+" дорівнює=" + rval)

            break;

            case 6:
                let num_case6 = parseInt(prompt("Введіть ціле число і натисніть:",));
                let i_case6= 0;
                let x_case6 =num_case6;
                while (num_case6>0){
                    if(x_case6%num_case6==0){
                        i_case6++
                    }else{

                    }
                    num_case6--
                }
            if(i_case6==2){
                console.log(x_case6+"-просте число")
            }else{
                console.log(x_case6+"-не просте число")
            }
            break;

            case 7:
                
                var f = function(number){
                    return (-3*Math.pow(number,2))+(2*number)+9;
                }
                let a = parseInt(prompt("верхгю межу інтервалу ",)); 
                let b = parseInt(prompt("Введіть ніжню межу інтервалу",)); 
                let n_case7 = parseInt(prompt("Введіть кількість відрізків робиття",));    
                let y,dy,In
                if(n_case7>0){
                    dy=(b-a)/n_case7
                    y=f(a)+f(b)
                    for(let i=1;i<n;i++){
                        console.log("y("+(i-1)+')='+y.toFixed(2))
                        y=y+2*(f(a+dy*i));
                        
                    }
                    In=(b-a)/(2*n)*y
                    In=In*y
                    console.log("відповідт:"+In.toFixed(2))
                }else{
                    alert('Error')
                }
            break;

            case 8:
                let i_case8 = -4 
                    while(i_case8<4.5) {
                        let y=(-2.1*Math.pow(i_case8,2))-(0,24*i_case8)+1.6
                        console.log("при x="+i_case8+" y дорівнює:"+y.toFixed(2))
                        i_case8=i_case8+0.5    
                }
            
            break;

            case 9:
            let accuracy = parseInt(prompt("Задайте точність обчислення ПІ"))
            let dot = parseFloat(prompt("Задайте скільки знаків після коми повинно бути",)); 
            const f_case9 = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
            if(dot>1){
            var pi=4
            var pi_crook=3
            for(let i=1;i<=accuracy; i++){
                if(i%2!= 0){
                
                pi=pi-4/pi_crook
                pi_crook=pi_crook+2
                continue;
            }
                
                pi=pi+4/pi_crook
                pi_crook=pi_crook+2
                //console.log(pi.toFixed(accuracy))

            }console.log("Значення числа ПІ з відповідною точністю дорівнює="+pi.toFixed(dot))
        }else if(dot<1){
            dot=f_case9(dot)
            console.log(dot)
            for(let i=1;i<=accuracy; i++){
                if(i%2!= 0){
                pi=pi-4/pi_crook
                pi_crook=pi_crook+2
                continue;
            }

                pi=pi+4/pi_crook
                pi_crook=pi_crook+2
                //console.log(pi.toFixed(accuracy))

            }console.log("Значення числа ПІ з відповідною точністю дорівнює="+pi.toFixed(dot))
            
        }else if(dot==0|| isNaN(dot|| dot == 1)){
            alert("Eror")

        }

        break;
        
        case 10:
            let a_case10 = parseInt(prompt("введіть перше ціле число ",)); 
            let b_case10 = parseInt(prompt("Введіть друге ціле число",)); 
            let answer_case10=0;
            if(a_case10<0){
                a_case10=-1*a_case10
            }else if(b_case10<0){
                b_case10=-1*b_case10
            }
            for(let i_case10=0;i_case10<=a_case10||i_case10<=b_case10;i_case10++){
                if(a_case10%i_case10==0||a_case10%i_case10==0){
                    answer_case10=i_case10
                }
            }
            console.log(answer_case10)
        break;
    }
    
    
        