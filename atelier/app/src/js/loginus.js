// login.js
import io from 'socket.io-client';
// import Home from "./Gerant/home";
export const loginus = () => {
    const socket = io('http://localhost:4000');

    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('usn')?.value;
        const password = document.getElementById('password')?.value;

        if (!username || !password) {
            console.log("Username or password is missing");
            return;
        }

        socket.emit('login', { username, password });

        socket.on('loginResponse', function(response) {
            if (response.success) {
              document.getElementById('loginError').style.display = 'none';

              if(response.user.role=='gerant')
              window.location.pathname= "/home";
              else if(response.user.role=='biologiste')
              window.location.pathname='/medcine';
              else if(response.user.role=='medecin')
              window.location.pathname='/medcine';
             else if(response.user.role=='recepcioniste')
             window.location.pathname='/Agent';


            } else {
                document.getElementById('loginError').style.display = 'block';
            }
        });
    });
};
