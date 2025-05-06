{
    // 1.8
    // object destructuring
    const user = {
        name: 'Md. Shakir Mahmud',
        age: 25,
        isSingle: true,
        id: 1,
        address: {
            city: 'Dhaka',
        }
    };

    const { name, address: {city: town} } = user; // type alias can't declare type here

    // array destructuring
    const numbers: number[] = [1, 2, 3, 4, 5]
    const [ a, , c, ...rest] = numbers

}