{
    // 1.7
    // Spread Operator
    const arr1: number[] = [1,2,3,4,5];
    const arr2: number[] = [6,7,8,9,10];
    const arr3: number[] = [...arr1, ...arr2];
    arr1.push(...arr2);
    console.log(arr3);
    console.log(arr1);

    const object1 = {
        name: 'Md. Shakir Mahmud',
        age: 25
    };
    const object2 = {
        gender: 'male',
        isSingle: true
    };
    const object3 = {
        ...object1,
        ...object2
    };
    console.log(object3);


    // Rest operator
    const numbersList = ( ...numbers: number[]) => {
        numbers.forEach((number: number) => console.log(number));
    }
    numbersList(1,2,3,4,5);
}