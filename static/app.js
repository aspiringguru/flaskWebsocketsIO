var socket = io.connect('http://' + document.domain + ':' + location.port);
console.log("app.js, document.domain:"+document.domain)
console.log("app.js, location.port:"+location.port)
socket.on('connect', function() {
    // we emit a connected message to let knwo the client that we are connected.
    socket.emit('client_connected', {data: 'New client!'});
});
