import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import EditUserForm from './EditUserForm';

function EditUser() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (editedUser) => {
      const { id } = editedUser;
      return axios.put(`http://localhost:4000/users/${id}`, editedUser);
    },
    onSuccess: () => showSuccessToast(),
  });

  const handleSubmit = (formData) => {
    mutation.mutate({ id: state.id, ...formData });
  };

  const showSuccessToast = () => {
    toast.success('User has been edited', {
      toastId: 123,
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => navigate("/users")
    });
  };

  return (
    <div className='adduser-wrapper'>
      <Link to="/users">Go back to users</Link>
      <div>Edit User</div>
      <EditUserForm onSubmit={handleSubmit} initialState={{ email: state.email, username: state.username }} />
      <ToastContainer />
    </div>
  );
}

export default EditUser;
