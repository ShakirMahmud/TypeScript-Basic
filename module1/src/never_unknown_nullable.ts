{
    // 1.12
    // nullable types
    const searchName = (value: string | null) => {
        value ? console.log('Found') : console.log('Not Found');
    }
    searchName(null);
    searchName('Md. Shakir Mahmud');

    // unknown types --> typeof
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number') {
            console.log(value * 3.6);
        }else{
            console.log('Value is not a number');
        }
    }
    getSpeedInMeterPerSecond(100);
    getSpeedInMeterPerSecond('100');

    // never
    const throwError = (message: string): never => {
        throw new Error(message);
    }
    throwError('Error');
}