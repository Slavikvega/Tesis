var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var clients = io.sockets.clients();

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('Cliente conectado:' + socket.id);

    socket.broadcast.emit('connection', socket.id);

    socket.on('mouse', (data) => socket.broadcast.emit('mouse', data));

    socket.on('disconnect', () => {
      console.log('Client has disconnected' + socket.id);
      socket.broadcast.emit('disconnection', socket.id);
        });
});

server.listen(port, () => {
    console.log('Listening on port: ' + port);
})

//intento de ver clientes conectados
function findClientsSocket(roomId, namespace) {
    var res = []
    // the default namespace is "/"
    , ns = io.of(namespace ||"/");

    if (ns) {
        for (var id in ns.connected) {
            if(roomId) {
                var index = ns.connected[id].rooms.indexOf(roomId);
                if(index !== -1) {
                    res.push(ns.connected[id]);
                }
            } else {
                res.push(ns.connected[id]);
            }
        }
    }
    return res;
}
