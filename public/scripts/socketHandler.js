const socket = io.connect('http://localhost:3000');

socket.on('init', data => {
    console.log(data);
});