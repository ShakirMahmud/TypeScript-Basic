// 1.6

// Function
// Normal Function
function add(a: number, b: number = 10): number { //default value
    return a + b;
}
console.log(add(2, 3));

// Arrow Function
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(2, 3));

// function inside a object = Method
const user2 = {
    name: 'Md. Shakir Mahmud',
    balance : 1000,
    addBalance(money: number): string {
        return `My new balance is ${this.balance + money}`;
    },
}

const arr: number[] = [1,2,3,4,5];
const newArr: number[] = arr.map((elem: number): number => elem * elem);