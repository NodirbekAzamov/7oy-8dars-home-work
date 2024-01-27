import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:5000/users"

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
    const response = await axios.get(URL)
    return response
})

export const adduser = createAsyncThunk("users/adduser", async (payload) => {
    const response = await axios.post(URL, payload)
    return response
})

export const updateUser = createAsyncThunk("users/updateUser", async (payload) => {
    const response = await axios.put(`${URL}/${payload.id}`, payload)
    return response
})

export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
    await axios.delete(`${URL}/${id}`)
    return id
})

const UserSlice = createSlice({
    name: "users",
    initialState: { data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(adduser.fulfilled, (state, action) => {
                state?.data?.push(action.payload)
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const update_user = action.payload
                const index = state.data.findIndex(item => item.id === update_user.id);
                if (index) {
                    state.data[index] = update_user
                }
            })
            .addCase(removeUser.fulfilled, (state, action) => {
                state.data.filter(item => item.id === action.id)
            })
    }
})
export const getAllUsers = (state) => state?.users?.data
export default UserSlice.reducer


