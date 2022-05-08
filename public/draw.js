// const {emit} = require("nodemon");
// const {socket} = require("socket.io");

let body = document.querySelector("body");
let canvas = document.querySelector("canvas");

let redo = document.querySelector("#redo");
let undo = document.querySelector("#undo");

let undoRedoTracker = [];
let track = 0;

let iX,iY,fX,fY;

//How much bottom the canvas is from screen
let boardTop = canvasBoard.getBoundingClientRect().top;

//How much left it is from screen
let boardLeft = canvasBoard.getBoundingClientRect().left;

let drawingMode = false;        //Mousedown = false

canvas.addEventListener("mousedown",function(e){

    let xPos = e.clientX + boardLeft;
    let yPos = e.clientY - boardTop;

    iX = xPos;
    iY = yPos;

    console.log("Mouse Pressed");

    if(currTool == "pencil" || currTool =="eraser"){
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(iX,iY);
    }

    // let data = {
    //     x : e.clientX,
    //     y : e.clientY
    // }


    // //Send data to server
    // socket.emit("beginPath",data);

    // console.log(currTool);
    
    // alert("Mouse was clicked at " + xPos + " " + yPos);
})

canvas.addEventListener("mousemove",function(e){

    // let data = {
    //     x : e.clientX,
    //     y : e.clientY
    // };

    // socket.emit("drawStroke",data);

    let xPos = e.clientX + boardLeft;
    let yPos = e.clientY - boardTop;

    fX = xPos;
    fY = yPos;

    if(currTool == "pencil" || currTool =="eraser"){
        
        if(drawingMode == true){

            tool.lineTo(fX,fY);
            tool.stroke();

            iX = fX;
            iY = fY;
        }
    }
})

canvas.addEventListener("mouseup",function(e){


    // let data = {
    //     x : e.clientX,
    //     y : e.clientY
    // };

    // socket.emit("liftedUp",data);

    let xPos = e.clientX + boardLeft;
    let yPos = e.clientY - boardTop;

    fX = xPos;
    fY = yPos;

    if(currTool == "rect"){
        tool.strokeRect(iX,iY,fX-iX,fY-iY);
    }
    else if(currTool == "line"){
        tool.beginPath();            //To begin path
        tool.moveTo(iX,iY);         //Moves to intial cordinates 
        tool.lineTo(fX,fY);         //Draw mathematically line from final coordinated to intial coordinates
        tool.stroke();              //Shows the line on User Interface UI

    }else if(currTool == "pencil" || currTool=='eraser'){
        drawingMode = false;
    }

    let url = canvas.toDataURL();

    if(track < undoRedoTracker.length - 1)
        undoRedoTracker[++track] = url;
    else{
        undoRedoTracker.push(url);
        track = undoRedoTracker.length - 1;
    }
    
    // alert("Mouse was released at " + xPos + " " + yPos);
})

undo.addEventListener("click",function(e){

    if(track > 0) track--;

    //Track Action
    let data = {
        trackVal : track,
        undoRedoTracker
    }

    // socket.emit("redoUndo",data);
    undoRedoCanvas(data);

    // alert("Functon Ended");
})


redo.addEventListener("click",function(e){

    if(track < undoRedoTracker.length - 1) track++;

    //Track Action
    let data = {
        trackVal : track,
        undoRedoTracker
    }

    undoRedoCanvas(data);
    // socket.emit("redoUndo",data);
})

function undoRedoCanvas(trackObj){

    let track = trackObj.trackVal;
    let undoRedoTracker = trackObj.undoRedoTracker;

    // alert(track + " " + undoRedoTracker.length);

    let url = undoRedoTracker[track];
    let img = new Image();

    // alert(url);
    img.src = url;

    img.onload = (e) =>{
        tool.clearRect(0,0,canvas.width,canvas.height);
        tool.drawImage(img,0,0,canvas.width,canvas.height);
        // alert('Image Loaded');
    }
}


// socket.on("beginPath",(data)=>{

//     let xPos = data.x + boardLeft;
//     let yPos = data.y - boardTop;

//     iX = xPos;
//     iY = yPos;

//     console.log("Succesfunlly recieved data" + data.x + " " + data.y);

//     if(currTool == "pencil" || currTool =="eraser"){
//         drawingMode = true;
//         tool.beginPath();
//         tool.moveTo(data.x,data.y);
//     }
// })

// socket.on("drawStroke",(data)=>{

//     let xPos = data.x + boardLeft;
//     let yPos = data.y - boardTop;

//     fX = xPos;
//     fY = yPos;

//     if(currTool == "pencil" || currTool =="eraser"){
        
//         if(drawingMode == true){

//             tool.lineTo(fX,fY);
//             tool.stroke();

//             iX = fX;
//             iY = fY;
//         }
//     }

// })

// socket.on("redoUndo",(data)=>{
//     undoRedoCanvas(data);
// })

// socket.on("liftedUp",(data)=>{

//     let xPos = data.x + boardLeft;
//     let yPos = data.y - boardTop;

//     fX = xPos;
//     fY = yPos;

//     if(currTool == "rect"){
//         tool.strokeRect(iX,iY,fX-iX,fY-iY);
//     }
//     else if(currTool == "line"){
//         tool.beginPath();            //To begin path
//         tool.moveTo(iX,iY);         //Moves to intial cordinates 
//         tool.lineTo(fX,fY);         //Draw mathematically line from final coordinated to intial coordinates
//         tool.stroke();              //Shows the line on User Interface UI

//     }else if(currTool == "pencil" || currTool=='eraser'){
//         drawingMode = false;
//     }

//     let url = canvas.toDataURL();

//     if(track < undoRedoTracker.length - 1)
//         undoRedoTracker[++track] = url;
//     else{
//         undoRedoTracker.push(url);
//         track = undoRedoTracker.length - 1;
//     }
// })





