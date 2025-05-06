// 1.5

// Reference Type --> Object

const user: {
    gender: 'male'; // type --> literal type
    name: string;
    age: number;
    isSingle?: boolean; // optional type
    readonly id: number;
} = {
    gender: 'male', // have to be same as above
    name: 'Md. Shakir Mahmud',
    age: 25,
    isSingle: true,
    id: 1
};
