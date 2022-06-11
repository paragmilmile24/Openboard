// const { Socket } = require("socket.io");

let red = document.querySelector(".red");       //Way 1
let green = document.querySelector(".green");      //Way 2
let black = document.querySelector(".black");

red.addEventListener("click",function(e){
    tool.strokeStyle = "red";
    socket.emit("colorChange","red");
});

green.addEventListener("click",function(e){
    tool.strokeStyle = "lightgreen";
    socket.emit("colorChange","lightgreen");
})

black.addEventListener("click",function(e){
    // alert("Black clicked");
    tool.strokeStyle = "black";
    socket.emit("colorChange","black");
})

socket.on("colorChange",color=>{
    tool.strokeStyle = color;
})