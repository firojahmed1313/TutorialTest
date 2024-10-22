const user={
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
}

const createUser =(name:string,hobbies:string[],role:(string | number)[],age:number=34):{name:string,age:number,hobbies:string[],role:(string | number)[]}=>{
    return {
        name,
        age,
        hobbies,
        role
    }
}

console.log(createUser(user.name,user.hobbies,user.role,user.age));
console.log(createUser(user.name,user.hobbies,user.role));

export {}