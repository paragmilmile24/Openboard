const express = require("express");     //Return function
const socket = require("socket.io");

const app = express();  //Initialised and server ready

app.use(express.static("public"));

let port = 3000;        //Making ready for listenning
let server = app.listen(port,()=>{
    console.log("Listening to port : " + port);
})

let io = socket(server);        //Connection is established, server is instance of server

//When frontend is conneted , on connection
//Whenever new connection is established , below code is executed.
io.on("connection",(socket)=>{
    console.log("Made socket connection");

//     On recieving data at server
    socket.on("beginPath",(data)=>{
        //Transfer to all connected devices
        // console.log("Data recieved at server");
        io.sockets.emit("beginPath",data);
    })

    socket.on("drawStroke",(data)=>{
        // console.log("Succesfully Recieved drawStroke at Server");
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })

    socket.on("liftedUp",(data)=>{
        io.sockets.emit("liftedUp",data);
    })

    socket.on("eraserToolChange",(data)=>{
        console.log("Recieved at server");
        io.sockets.emit("eraserToolChange",data);
    })

    socket.on("pencilToolChange",(data)=>{
        console.log("Recieved at server");
        io.sockets.emit("pencilToolChange",data);
    })

    socket.on("rectToolChange",(data)=>{
        console.log("Recieved at server");
        io.sockets.emit("rectToolChange",data);
    })

    socket.on("lineToolChange",(data)=>{
        console.log("Recieved at server");
        io.sockets.emit("lineToolChange",data);
    })

    socket.on("box0",(data)=>{
        io.sockets.emit("box0",data);
    })

    socket.on("box1",(data)=>{
        io.sockets.emit("box1",data);
    })

    socket.on("box2",(data)=>{
        io.sockets.emit("box2",data);
    })

    socket.on("box3",(data)=>{
        io.sockets.emit("box3",data);
    })

    socket.on("colorChange",color=>{
        io.sockets.emit("colorChange",color);
    })

})



