// Write a script that declares variables of different data types and logs 
//both the value and type of each variable to the console.

let num=200;
let str="Raju Dev";
let bool=true;
let obj={name:"Raju",
        Gender:"M"
};

let arr=[90,203,440.2004];

console.log(num," Datatype is "+typeof(num));
console.log(str," Datatype is "+typeof(str));
console.log(bool," Datatype is "+typeof(bool));
console.log(obj,"Datatype is "+typeof(obj));
console.log(arr,"Datatype is "+typeof(arr));



//Output on console
/*
200  Datatype is number
Raju Dev  Datatype is string
true  Datatype is boolean
{ name: 'Raju', Gender: 'M' } Datatype is object
[ 90, 203, 440.2004 ] Datatype is object
*/