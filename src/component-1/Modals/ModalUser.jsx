import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { adduser, fetchUser, updateUser } from '../features/users/UserSlice';
import { nanoid } from '@reduxjs/toolkit';
export default function ModalUser({ open, toggle, item }) {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.reload();
        let payload = {
            id: nanoid(),
            name: e.target[0].value,
            username: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
            company: e.target[4].value,
        }

        if (item) {
            dispatch(updateUser({id: item.id, payload: payload}))
        } else {
            dispatch(adduser({ ...payload }))
        }
        dispatch(fetchUser())
    }

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h3>Add User</h3>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input type="text" placeholder='Name' defaultValue={item.name} className='form-control my-1' />
                    <input type="text" placeholder='User name' defaultValue={item.username} className='form-control my-1' />
                    <input type="text" placeholder='Email' defaultValue={item.email} className='form-control my-1' />
                    <input type="text" placeholder='Address' defaultValue={item.address} className='form-control my-1' />
                    <input type="text" placeholder='company' defaultValue={item.company} className='form-control my-1' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-success'>save</button>
            </ModalFooter>
        </Modal>
    )
}
