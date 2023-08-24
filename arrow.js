// function declaration 

function add(a,b){
    const sum =a+b;
    return sum;

} 

// function expression

const add2= function (a,b){
    return a+b;
}

// arrow function 

const add3 = (a,b,c) => a+b+c;




const total = add(5,10);
console.log(total);

console.log(add2(100,300));
console.log(add3(200,100,500));