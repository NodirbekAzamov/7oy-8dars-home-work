import React, { useEffect, useState } from 'react'
import { fetchUser, getAllUsers, removeUser, updateUser } from './UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import ModalUser from '../../Modals/ModalUser'

export default function UserList() {
    const [modal, setModal] = useState(false)
    const [id, setId] = useState("")
    const dispatch = useDispatch()
    const users = useSelector((state) => state?.users?.data)
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    const openModal = () => {
        setModal(true)
        setId("")
    }

    const edit = (item) => {
        setModal(true) 
        setId(item)
        dispatch(updateUser(item))
        console.log(item);
    }

    const remove = (id) => {
        window.location.reload()
        dispatch(removeUser(id))
    }


    return (
        <div className=' container'>
            <ModalUser open={modal} toggle={() => setModal(false)} id={id}/>
            <div className="row my-3">
                <div className="col-3">
                    <button onClick={openModal} className='btn btn-primary'>add user</button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>T/R</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address (city)</th>
                                <th>Company (name)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.data?.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        <td>{item.company}</td>
                                        <td>
                                            <button onClick={()=>edit (item)} className='btn btn-info'>edit</button>
                                            <button onClick={()=> remove (item.id)} className='btn btn-danger'>delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


{/* <div className="row">
                <div className="col-10 offset-1">
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>T/R</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address (city)</th>
                                <th>geo (lng)</th>
                                <th>Phone</th>
                                <th>Web site</th>
                                <th>Company (name) </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                            users?.data?.map((item, index) => {
                                return <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.geo.lng}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.website}</td>
                                    <td>{item.company.name}</td>
                                </tr>
                            })
                        } */}
// </tbody>
// </table>
// </div>
// </div> */}