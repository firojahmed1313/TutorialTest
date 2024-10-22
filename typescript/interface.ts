
interface User{
    readonly _id: string
    name:string;
    age:number;
    hobbies?:string[]; 
    getProject?():string;
}
interface User{
    gitHubId:string;
}
interface Admin extends User {
    role:string | number;
}
let firoj:User={ _id: "123",name:"firoj",age:20,getProject:()=>{
    return "project";
},gitHubId:"12234555",}
let soif:Admin={ _id: "123",name:"firoj",age:20,role:"administrator",getProject:()=>{
    return "project";
},gitHubId:"12234555",}
export {}