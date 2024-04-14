import io from 'socket.io-client';



export const editus=() =>{
  const socket = io('http://localhost:4000');
  const userId = document.getElementById('idu').value;

  // Request initial user data
  socket.emit('requestUserData', userId);

  // Handle incoming user data
  socket.on('sendUserData', (user) => {
    document.getElementById('us').value = user.nom;
    document.getElementById('usn').value = user.username;
    document.getElementById('rl').value = user.role;
    document.getElementById('pr').value = user.prenom;
    document.getElementById('ps').value = user.password;
  });

  // Update user data
  document.getElementById('edit').addEventListener('click',  function(e) {
    e.preventDefault();
    const username = document.getElementById('usn').value;
    const nom = document.getElementById('us').value;
    const prenom = document.getElementById('pr').value;
    const role = document.getElementById('rl').value;
    const password = document.getElementById('ps').value;

    socket.emit('updateUser', { id: userId, username, nom, prenom, role, password });
   // window.location.href = '../index.html'; // Redirect back to the main page
  });

//   document.getElementById('ajoute').addEventListener('click', function() {
//     const usernameA = document.getElementById('usnA').value;
//     const nomA = document.getElementById('usA').value;

//     const prenomA = document.getElementById('prA').value;
//     const roleA=document.getElementById('rlA').value;
//     const passwordA = document.getElementById('psA').value;

//     socket.emit('addUser', {usernameA,nomA, prenomA,roleA, passwordA});
//  //   window.location.href="../index.html";
// });
}

export default editus;
