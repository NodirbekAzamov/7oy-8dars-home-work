import { createSlice } from "@reduxjs/toolkit";
import sub from "date-fns/sub";
let date = sub(new Date(), { minutes: 10 }).toISOString();
const initialState = [
    {
        id: 1,
        title: "Learn Modern Redux",
        select: "Asilbek",
        date: date,
        reartions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam incidunt commodi quidem."
    },
]

const UsersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({ title, select, content }) {
                return {
                    payload: {
                        title: title,
                        date: new Date().toISOString(),
                        reartions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                        select: select,
                        content: content
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { userId, reartion } = action.payload
            let single_user = state.find(item => item.id === userId)
            single_user.reartions[reartion] += 1
        }
    }
})
export const getAllUser = (state) => state.user_card
export const { userAdded, reactionAdded } = UsersSlice.actions
export default UsersSlice.reducer