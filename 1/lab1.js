a = parseFloat (prompt ("Ведіть змінну a:",));
b = parseFloat (prompt ("Ведіть змінну b:",));
//розрахунки беруться для а=4 b=5
const numerator = { //чисельник 

    firstbrackets: Math.pow(a+b,4), //(a+b)^4 6561
    secondbrackets: {
        term1: Math.pow(a, 4), //a^4 256
        term2: 4 * Math.pow(a, 3) * b, //4a^4b 1280 
        term3: 6*Math.pow(a,2)*Math.pow(b,2), //6 2400
    },
}
 
const numeratorSum = numerator.firstbrackets-(numerator.secondbrackets.term1+numerator.secondbrackets.term2+numerator.secondbrackets.term3)
    //numeratorSum 2625
 
    const pronoun= { //знаменник 
    term1: 4*a*Math.pow(b,3), //2000
    term2: Math.pow(b,4) //625
}
const pronounSum= pronoun.term1+pronoun.term2 //2625
console.log(pronounSum,numeratorSum,a,b)
answer = numeratorSum/pronounSum
if(pronounSum!=0){
        alert(answer)
    }
    else if(pronounSum==0){
        alert('You cannot divide by zero!')
    //throw new Error('You canot divide by zero!')
}

alert('Hello word')

///4**2 !=18