import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './UsersSlice'
const reartionEmoji = {
    thumbsUp: "👍",
    wow: "😯",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️",
}

export default function ReactionButton({ reartions }) {
    const dispatch = useDispatch()
    const reartionButton = Object.entries(reartionEmoji).map(([name, emoji]) => {
        return <button onClick={ ()=> dispatch(reactionAdded({userId: reartions.id, reartion: name}))} className='btn btn-info mx-1'>{emoji}{reartions.reartions[name]}</button>
    })
    return (
        <div>
            <span>{reartionButton }</span>
        </div>
    )
}
