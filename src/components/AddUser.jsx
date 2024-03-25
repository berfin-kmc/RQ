import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useAddUserMutation, useDeleteUserMutation } from '../hooks/mutations';
import { useUsersData } from '../hooks/useUsersData';
import Loader from './Loader';
import { showDeleteConfirmation } from '../utils/DeleteConfirmation';
import { v4 as uuidv4 } from 'uuid';

function AddUser() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const { data, isLoading, isFetching } = useUsersData();
    const addUserMutation = useAddUserMutation();
    const deleteUserMutation = useDeleteUserMutation();


    function handleAddUserSubmit(event) {
        event.preventDefault();
        addUserMutation.mutate({ id: uuidv4(), email: email, username: username });
        setEmail("");
        setUsername("");
    }

    function handleDeleteUser(id) {
        deleteUserMutation.mutate(id);
    }

    const usersElements = data?.data.map(user => (
        <div key={user.id} className='w-100 row justify-content-between mb-1'>
            <span className='col-5'> <b>{user.username}</b> </span>
            <div className=" col-4 user-buttons-wrapper d-flex justify-content-evenly g-2 ">
                <button onClick={() => navigate("/edituser", { state: user })} className='  btn btn-primary'>Edit User</button>
                <button onClick={() => showDeleteConfirmation(() => handleDeleteUser(user.id))} className=' btn btn-danger'>Delete User</button>
            </div>
        </div>
    ));

    return (
        <div className='adduser-wrapper'>
            <div>Add User</div>
            <Form onSubmit={handleAddUserSubmit} className='d-flex gap-1'>
                <Form.Control
                    type="email"
                    name="mail"
                    id="mail"
                    value={email}
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)} />
                <Form.Control
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)} />
                <Button variant="primary" type='submit' >Add User</Button>
            </Form>
            <div className='users-wrapper mt-3'>
                <h1>Users</h1>
                {(isLoading || isFetching) ? (<Loader />) :
                    (<div className='users'>
                        {usersElements}
                    </div>)}
            </div>
        </div>
    );
}

export default AddUser;
