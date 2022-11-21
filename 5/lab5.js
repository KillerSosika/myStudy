var zodiac_sings=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius', 'Capricornus	','Aquarius','Pisces']
console.log(zodiac_sings.length)
let NAME_fun=  function(name){
    name =prompt ("Введить name",);
    return name;
  } 

let ZODIAC_fun=  function(zodiac){
    let x =true
    while(x){
    let n = parseInt(prompt("Знак зодіаку особистості \n1.Aries \n2.Taurus \n3.Gemini \n4.Cancer \n5.Cancer \n6.Virgo \n7.Libra \n8.Scorpio \n9.Sagittarius \n10.Capricornus \n11.Aquarius \n12.Pisces"))
    if(isNaN(n)){
        break;
    }else if(isNaN(n) || n<=0 || n>=13){
        alert("try again")
    }
    else{
        zodiac=n
        x=false
        }
    }
    return zodiac


  }
let zodiac_name= function(n){
  n=zodiac_sings[n-1]
  return n;
}
 
  let BDAY_fun  =  function(){
    var arr = [];
    for(let i=0;i<3;i++){
      var o =0
      switch(i){
         
        case 0:
          o =0
          while(o==0) { 
          let x=parseInt(prompt('Введить день вашого народження'))
          if(isNaN(x)||x<0||x>32){
            alert('try again')
          }else{
            arr[i]=x
            o++
          }
        }  
        break;

        case 1:
         o =0
            while(o==0) { 
            let x=parseInt(prompt('Введить місяць вашого народження'))
            if(isNaN(x)||x<0||x>12){
              alert('try again')
            }else{
              arr[i]=x
              o++
            }
          }  
         break;

          case 2:
          o =0
            while(o==0) { 
            let x=parseInt(prompt('Введить рік вашого народженя'))
            if(isNaN(x)||x<1900){
              alert('try again')
            }else{
              arr[i]=x
              o++
            }
          }  
          break;
        }
  }
  return arr;
}
alert('beginig')

let znak_1 = {
    name:NAME_fun(),
    zodiac:ZODIAC_fun(),
    bday:BDAY_fun()
 };
 let znak_2 = {
    name:NAME_fun(),
    zodiac:ZODIAC_fun(),
  bday:BDAY_fun()
 };
 let znak_3 = {
    name:NAME_fun(),
    zodiac:ZODIAC_fun(),
    bday:BDAY_fun()
 };
 let znak_4 = {
    name:NAME_fun(),
    zodiac:ZODIAC_fun(),
    bday:BDAY_fun()
 };
 let znak_5 = {
   name:NAME_fun(),
    zodiac:ZODIAC_fun(),
    bday:BDAY_fun()
 };
 let znak_6 = {
   name:NAME_fun(),
    zodiac:ZODIAC_fun(),
    bday:BDAY_fun()
 };
 let znak_7 = {
   name:NAME_fun(),
    zodiac:ZODIAC_fun(),
    bday:BDAY_fun()
 };
 let znak_8 = {
    name:NAME_fun(),
    zodiac:ZODIAC_fun(),
   bday:BDAY_fun()
 };
  //начало сортировки
  var book = [ znak_1, znak_2, znak_3, znak_4, znak_5,znak_6 ,znak_7,znak_8 ]
  book.sort(function(a, b){
    return a.zodiac-b.zodiac
  })
  let q = parseInt(prompt('про який місяць ви бажаєте побачити інформацію?'))
  var problem=0 
  let a = 1
  for(i=0;i<8;i++){
    book[i].zodiac=zodiac_name(book[i].zodiac)
  }
 console.log(book)
   for(i=0;i<8;i++){
      if(book[i].bday[1]==q){
        alert("Name:"+book[i].name+"\n Zodiak:"+book[i].zodiac+"\n birthday:"+book[i].bday[0]+"."+book[i].bday[1]+"."+book[i].bday[2] )
      }else{
        problem=i     
    }

  }
  if(problem==8){
    alert('information didn`t found')
  }