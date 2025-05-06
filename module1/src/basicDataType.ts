//1.4
// string
let firstName: string = 'Md. Shakir Mahmud';
console.log(firstName);

// number
let age: number = 25;
console.log(age);

// boolean
let isSingle: boolean = true;
console.log(isSingle);

// undefined
let isUndefined: undefined = undefined;
console.log(isUndefined);

// null
let isNull: null = null;
console.log(isNull);

let x:number;
// x = 'hello'; // error
x = 25;
// x = true; //error
console.log(x);


// Array
let numbers: number[] = [1,2,3,4,5];
console.log(numbers);

let strings: string[] = ['a', 'b', 'c'];
// strings.push(5); // error
console.log(strings);

// tuple --> array --> types of values in order
let person: [string, number] = ['Md. Shakir Mahmud', 25];
console.log(person);