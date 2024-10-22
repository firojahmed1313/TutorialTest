type User={
    readonly _id: string
    name:string;
    age:number;
    hobbies?:string[];
    role:string | number;
}

const createUser = (user:User):User => {
    return user;
};

export {}