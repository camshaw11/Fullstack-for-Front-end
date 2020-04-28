const express = require('express');
const app = express();
const port = 'www.gaijin.party';
const io = require('socket.io')(port);

// app.get('/', (req, res) => res.send('Thomas Lennon Croskery'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
  
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
