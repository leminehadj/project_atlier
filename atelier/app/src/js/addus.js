import io from 'socket.io-client';


export const addus = () => {
  const socket = io('http://localhost:4000');
  const addButton = document.getElementById('ajoute');

  // Ensure addButton exists
  if (!addButton) {
      console.error("Add button not found in the DOM");
      return;
  }

  const handleClick = () => {
      const username = document.getElementById('usn').value;
      const nom = document.getElementById('us').value;
      const prenom = document.getElementById('pr').value;
      const role = document.getElementById('rl').value;
      const password = document.getElementById('ps').value;

      socket.emit('addUser', { username, nom, prenom, role, password });
      // window.location.href = "../index.html"; // Optionally redirect if needed
  };

  // Remove any existing listeners to avoid duplicates
  addButton.removeEventListener('click', handleClick);
  addButton.addEventListener('click', handleClick);

  // Return a cleanup function to remove the listener when no longer needed
  return () => {
      addButton.removeEventListener('click', handleClick);
  };
};

export default addus;

