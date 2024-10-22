const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    users:(JSON.parse(localStorage.getItem("user")))?JSON.parse(localStorage.getItem("user")):[]
}

const Slice= createSlice({ 
    name:"userSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            const data={
                id: nanoid(),
                name:action.payload
            }
            state.users.push(data);
            localStorage.setItem("user",JSON.stringify(current(state.users)))
            //console.log(current(state.users));
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id!== action.payload)
            localStorage.setItem("user",JSON.stringify(state.users))
        },
    }
})
export const {addUser,deleteUser} =Slice.actions;
export default Slice.reducer;