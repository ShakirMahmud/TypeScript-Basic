{
    // 1.9
    // type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contact?: string;
        address: {
            street: string;
            city: string;
            country: string;
        };
    }

    const student1: Student = {
        name: 'Md. Shakir Mahmud',
        age: 25,
        gender: 'male',
        contact: '01711111111',
        address: {
            street: '123 Main St',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    }

    const student2: Student = {
        name: 'Jamal',
        age: 22,
        gender: 'male',
        address: {
            street: '456 Elm St',
            city: 'New York',
            country: 'USA'
        }
    }

    type UserName = string
    type isAdmin = boolean
    const userName: UserName = 'Md. Shakir Mahmud';
    const isAdmin: isAdmin = true;


    type Add = (a: number, b: number) => number;
    const add: Add = (a, b) => a + b;

}