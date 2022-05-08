// const express = require("express");     //Return function
// const socket = require("socket.io");

// const app = express();  //Initialised and server ready

// app.use(express.static("public"));

// let port = 3000;        //Making ready for listenning
// let server = app.listen(port,()=>{
//     console.log("Listening to port : " + port);
// })

// let io = socket(server);        //Connection is established, server is instance of server

// //When frontend is conneted , on connection
// //Whenever new connection is established , below code is executed.
// io.on("connection",(socket)=>{
//     console.log("Made socket connection");

//     On recieving data at server
//     socket.on("beginPath",(data)=>{
//         //Transfer to all connected devices

//         io.sockets.emit("beginPath",data);
//     })

//     socket.on("drawStroke",(data)=>{
//         io.sockets.emit("drawStroke",data);
//     })

//     socket.on("redoUndo",(data)=>{
//         io.socket.emit("redoUndo",data);
//     })

//     socket.on("liftedUp",(data)=>{
//         io.socket.emit("liftedUp",data);
//     })
// })



