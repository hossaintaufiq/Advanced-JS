
// distructing objects 

const actor= {
    name: 'anata',
    age: 55,
    phone: '01225689753',
    money: 22554566366


}

// normal ways of declaration 
const phoneNumber = actor.phone;


console.log(actor.name);
console.log(actor.name);
console.log(actor.name);
console.log(phoneNumber);
console.log(phoneNumber);
console.log(phoneNumber);



//  distructive ways of declaration 

const {name, phone , age }= actor;

console.log( name ,phone , age);

// distructaring array
 


// normal way
function doubleThem (x,y){
    return [x*x,y*y];
}

console.log(doubleThem(5,6));

// advanced way 
function doubleThem (x,y){
    return [x*x,y*y];
}


const [a,b] = doubleThem(11,23);

console.log(a,b);
// console.log(doubleThem(5,6));
