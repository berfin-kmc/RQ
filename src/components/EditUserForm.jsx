import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function EditUserForm({ onSubmit, initialState }) {
    const [formData, setFormData] = useState(initialState);
    const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
        // Check if formData is different from initialState
        const isFormEdited = !isEqual(formData, initialState);
        setIsEdited(isFormEdited);
    }, [formData, initialState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    // Utility function to check object equality
    
    const isEqual = (obj1, obj2) => {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    };

    return (
        <Form onSubmit={handleSubmit} className='d-flex flex-column gap-2'>
            <Form.Control
                type="email"
                name="email"
                value={formData.email}
                placeholder='E-mail'
                onChange={handleChange}
            />
            <Form.Control
                type="text"
                name="username"
                value={formData.username}
                placeholder='Username'
                onChange={handleChange}
            />
            <Button variant="primary" type='submit' disabled={!isEdited} >Edit User</Button>
        </Form>
    );
}

export default EditUserForm;
