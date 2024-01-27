import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux';
import { adduser, fetchUser } from '../features/users/UserSlice';
export default function ModalUser({ open, toggle, id }) {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.reload();
        let payload = {
            name: e.target[0].value,
            username: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
            company: e.target[4].value,
        }
        dispatch(adduser({...payload}))
        
    }

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h3>Add User</h3>
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit} id='form'>
                    <input type="text" placeholder='Name' defaultValue={id.name} className='form-control my-1' />
                    <input type="text" placeholder='User name' defaultValue={id.username} className='form-control my-1' />
                    <input type="text" placeholder='Email' defaultValue={id.email} className='form-control my-1' />
                    <input type="text" placeholder='Address' defaultValue={id.address} className='form-control my-1' />
                    <input type="text" placeholder='company' defaultValue={id.company} className='form-control my-1' />
                </form>
            </ModalBody>
            <ModalFooter>
                <button type='submit' form='form' className='btn btn-success'>save</button>
            </ModalFooter>
        </Modal>
    )
}
