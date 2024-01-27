import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUser } from '../features/posts/UsersSlice'
import ModalCard from '../Modals/ModalCard'
import TimeAgo from '../features/posts/TimeAgo'
import ReactionButton from '../features/posts/ReactionButton'
export default function UserLists() {
    const users = useSelector(getAllUser)
    const [modalCard, setModalCard] = useState(false)
    const result = users?.map((item, index) => {
        return <div className='card my-3' key={index}>
            <div className="card-body ">
                <h2>{item.title}</h2>
                <TimeAgo time={item.date}/>
                <h3>{item.select}</h3>
                <h6>{item.content}</h6>
                <ReactionButton reartions={item}/>
            </div>
        </div>
    })

    const modalOpen =() => {
        setModalCard(true);
    }

    return (
        <div className='container'>
            <ModalCard open={modalCard} toggle={()=> setModalCard(false)}/>
            
            <div className="row">
                <div className="col-3 offset-2 my-2">
                    <button onClick={modalOpen} className='btn btn-primary'>add user</button>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    {result}
                </div>
            </div>
        </div>
    )
}
