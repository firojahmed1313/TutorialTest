const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState={
    data:[],
}

const slice2=createSlice({
    name:"test",
    initialState,
    reducer2:{
        test1:(state,action)=>{
            state.push("firoj");
        }
    }
})

export const {test1} =slice2.actions;
export default slice2.reducer;