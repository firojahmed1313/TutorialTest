class Tom {
    private readonly name: string="null";
    constructor(
        public animal:string,public iswild:boolean,private ani_id:string
    ){
        
    }
}
let tom=new Tom("cat",true,"123");


export {}