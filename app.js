const express = require('express');
const app = express();
const http = require('http').createServer(app);
// const port = 3000;
const io = require('socket.io')(app);

// app.get('/', (req, res) => res.send('Thomas Lennon Croskery'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
  
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
