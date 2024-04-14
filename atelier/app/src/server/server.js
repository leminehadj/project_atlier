const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
// Import the database connection
const db = require('./db_connection');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
app.use(express.static('public'));

// Rest of your server code, including Socket.IO logic

io.on('connection', (socket) => {


    console.log('A user connected id => ', socket.id);



// login
socket.on('login', (loginData) => {
    const { username, password } = loginData;
    // Assuming 'nom' is unique and you store passwords securely
    db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            console.error('Login error', err);
            socket.emit('loginResponse', { success: false });
            return;
        }
        if (results.length > 0) {
            // User found
            socket.emit('loginResponse', { success: true, user: results[0] });
        } else {
            // User not found
            socket.emit('loginResponse', { success: false });
        }
    });
});



// delete user
socket.on('deleteUser', (userId) => {
    db.query('DELETE FROM user WHERE id = ?', [userId], (err, result) => {
        if (err) {
            console.error('Failed to delete user', err);
            socket.emit('deleteResponse', { success: false });
            return;
        }
        console.log('User deleted successfully');
        socket.emit('deleteResponse', { success: true, userId: userId});
    });
});










    // Example of using the database connection to fetch user data
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            console.error('Failed to fetch user data', err);
            return;
        }
        socket.emit('userData', results); // Send user data to client
    });



    // ajouter des utilisateurs
    socket.on('addUser', (newUser) => {
        const {username, nom, prenom,role, password } = newUser;
        // Assuming you have a user table with columns 'nom', 'prenom', 'password'
        const query = 'INSERT INTO user (username,nom, prenom,role, password) VALUES (?,?,?,?,?)';

        db.query(query, [username, nom, prenom,role, password], (err, result) => {
            if (err) {
                console.error('Failed to insert new user', err);
                return;
            }
            console.log('New user added successfully');});
        });



        // Listen for requestUserData event
    socket.on('requestUserData', (userId) => {
        db.query('SELECT * FROM user WHERE id = ?', [userId], (err, results) => {
            if (err) {
                console.error('Failed to fetch user', err);
                return;
            }
            console.log("sended the user idd is "+userId);
            socket.emit('sendUserData', results[0]); // Assuming ID is unique and results[0] exists
        });
    });

    // Listen for updateUser event
    socket.on('updateUser', (userData) => {
        const { id,username, nom, prenom,role, password } = userData;
        db.query('UPDATE user SET username= ?, nom = ?, prenom = ?,role= ?, password = ? WHERE id = ?', [username,nom, prenom,role, password, id], (err, result) => {
            if (err) {
                console.error('Failed to update user', err);
                return;
            }
            console.log('User updated successfully');
        });
    });


});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
