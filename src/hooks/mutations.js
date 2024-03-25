import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


export const useAddUserMutation = () => {
  const queryClient = useQueryClient();

  const userApi = 'http://localhost:4000/users'

  return useMutation({
    mutationFn: (newUser) => axios.post('http://localhost:4000/users', newUser),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
};

export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:4000/users/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
};