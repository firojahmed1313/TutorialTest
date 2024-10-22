
function getResult<Type>(val:Type):Type{
    return val
}

const result=<Type>(val:Type):Type=>{
    return val;
}
const result2=<T,>(val:T):T=>{
    return val;
}
const result3=<F,>(val:F):F=>{
    return val;
}

const getindexFromArray=<T,>(arr:T[]):T=>{
    return arr[0];
}


export {}