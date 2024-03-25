import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const showDeleteConfirmation = (onConfirm) => {
  withReactContent(Swal).fire({
    title: <i>You sure you want to delete this user?</i>,
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire("Deleted!", "", "success");
    }
  });
};