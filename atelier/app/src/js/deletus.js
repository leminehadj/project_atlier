import io from 'socket.io-client';

const socket = io.connect();
socket.on('deleteResponse', (response) => {
    if(response.success) {
        alert('User deleted successfully');
        // Optionally, remove the user row from the table or refresh the table
        document.querySelector(`tr[data-user-id="${response.userId}"]`).remove();
    } else {
        alert('Failed to delete user');
    }
});
