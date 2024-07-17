//An arrow function that checks if a string contains a specific character.


const containsCharacter=(str,char)=> str.includes(char);
console.log(containsCharacter('hello','e'));
console.log(containsCharacter('hello','a'));
console.log(containsCharacter('hello','o'));
console.log(containsCharacter('hello','b'));

//output:
/*
true
false
true
false
*/