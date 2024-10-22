const logTwo=(x:Number|String)=>{
    if(x instanceof Number){
        return x.toString();
    }
    else{
        return x.length;
    }
    
}
const logTwo2=(x:Number|String):x is Number =>{
    return (x as Number).toString!==undefined
    
}

export{}