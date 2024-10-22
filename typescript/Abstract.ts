
abstract class Man{
    constructor(public name:string,public description:string){}
    abstract getFunction():void;
    getInfo():void{
        console.log(this.name);
        console.log(this.description);
    }
}
//let man=new Man("dert","qqqqqqqqqqqqqqqqqqquality");
class Male extends Man{
    constructor(name:string,description:string,public gender:string){
        super(name,description);
    }
    getFunction():void{
        console.log(this.gender);
    }
    
}
let maleMan=new Male("dert","qqqqqqqqqqqqqq","Male");
console.log(maleMan.getInfo());
export {}