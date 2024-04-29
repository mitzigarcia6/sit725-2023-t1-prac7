let express = require('express');
let app = express();
const router = require("./routers/router");

let port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/Flowers', router)

let server =  app.listen(port, ()=>{
    console.log('express server started');

});

let io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () =>  {
        console.log('A user connected');
    });
    setInterval(() => {
        socket.emit('number', Math.random(), 1000);
    });
});


