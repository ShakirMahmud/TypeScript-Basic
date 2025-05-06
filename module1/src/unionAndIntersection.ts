{
    // 1.10
    // union types --> either this or that.
    type FullstackDeveloper = 'FrontendDev'  | 'BackendDev'
    type DeveloperExperience = 'JuniorDev' | 'SeniorDev'
    
    type Developer = FullstackDeveloper | DeveloperExperience

    const newDeveloper: FullstackDeveloper = 'FrontendDev';
    const newDeveloper2: FullstackDeveloper = 'BackendDev';

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'AB+' | 'A+' | 'O+' | 'O-' | 'A-';
    }

    const user1: User = {
        name: 'Md. Shakir Mahmud',
        email: 'hZoZi@example.com',
        gender: 'male',
        bloodGroup: 'A-',
    }

    // intersection types
    type FrontendDeveloper ={
        skills: string[];
        designation1: 'Frontend Developer';
    }
    type BackendDeveloper ={
        skills: string[];
        designation2: 'Backend Developer';
    }

    type FullstackDeveloper2 = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper: FullstackDeveloper2 = {
        skills: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'ReactJs'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer',
    }
}