const { configureStore } = require("@reduxjs/toolkit");
import userReducers from "./slice"
import testReducers from "./slice2"
export const store = configureStore({
    reducer: {
        userDatas:userReducers,
        testData:testReducers
    }
    
})