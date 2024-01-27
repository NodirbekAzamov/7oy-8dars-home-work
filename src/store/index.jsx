import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../component-1/features/users/UserSlice";
import UsersSlice from "../component-2/features/posts/UsersSlice";
const store = configureStore({
    reducer:{
        users: UserReducer,
        user_card: UsersSlice,
    }
})

export default store