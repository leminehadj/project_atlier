// Connect to the Socket.IO server
import io from 'socket.io-client';
const loadFontAwesome = () => {
  const link = document.createElement('link');
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};
export const table_socket=() => {

 const socket = io('http://localhost:4000');


// function insertUserIntoTable(user) {
//     const tableBody = document.querySelector("tbody");
//     const row = document.createElement('tr');
//     const idCell = document.createElement('td');
//     idCell.textContent = user.id;
//     const usernameCell = document.createElement('td');
//     usernameCell.textContent = user.username;
//     const nomCell = document.createElement('td');
//     nomCell.textContent = user.nom;
//     const prenomCell = document.createElement('td');
//     prenomCell.textContent = user.prenom;
//     const roleCell = document.createElement('td');
//     roleCell.textContent = user.role;
//     const paCell = document.createElement('td');
//     paCell.textContent = user.password;
//     const actCell = document.createElement('td');

//     actCell.innerHTML = `<button    onClick="{()=> seeDetails(${user.id})}" style="border: none; background: none; margin-right:5px"><i class="far fa-file"></i></button>`;
//     actCell.innerHTML += `<button onClick="{()=>EditDetails(${user.id},'personnel')}" style="border: none; background: none;"><i class='fas fa-edit'></i></button>`;
//     // actCell.innerHTML += `<button onclick="deleteUser(${user.id})" style="border: none; background: none;"><i class='fas fa-trash'></i></button>`;



//     row.appendChild(idCell);
//     row.appendChild(usernameCell);
//     row.appendChild(nomCell);
//     row.appendChild(prenomCell);
//     row.appendChild(roleCell);
//     row.appendChild(paCell);
//     row.appendChild(actCell);
//     row.setAttribute('data-user-id', user.id);

//     tableBody.appendChild(row);
// }

// socket.on('userData', (users) => {
//     users.forEach(user => {
//         insertUserIntoTable(user); // Insert each user into the table
//     });
// });


// socket.on('deleteResponse', (response) => {
//     if(response.success) {
//         alert('User deleted successfully');
//         // Optionally, remove the user row from the table or refresh the table
//         document.querySelector(`tr[data-user-id="${response.userId}"]`).remove();
//     } else {
//         alert('Failed to delete user');
//     }
// });


// //edit
// function editUser(userId) {
//    // window.location.href = `edituser.html?userId=${userId}`;
// }
// // delete
// function deleteUser(userId) {
//     if(1) {
//         socket.emit('deleteUser', userId);
//     }
// }

return socket;
}

// document.getElementById('send').addEventListener('click', function() {
//     const username = document.getElementById('usn').value;
//     const nom = document.getElementById('us').value;

//     const prenom = document.getElementById('pr').value;
//     const role=document.getElementById('rl').value;
//     const password = document.getElementById('ps').value;

//     socket.emit('addUser', { username,nom, prenom,role, password });
//    // window.location.href="../index.html";
// });

