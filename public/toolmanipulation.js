// const { Socket } = require("socket.io");

// const { socket } = require("socket.io");

let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-box");

let download = document.querySelector("#download");


let toolsCont = document.querySelector(".toolbar");
let optionsCont = document.querySelector(".options-cont");
let optionsFlag = true;
// let pencilToolCont = document.querySelector(".pencil-tool-cont");
// let eraserToolCont = document.querySelector(".eraser-tool-cont");
// let pencil = document.querySelector(".pencil");
// let eraser = document.querySelector(".eraser");
// let sticky = document.querySelector(".sticky");
// let upload = document.querySelector(".upload");
// let pencilFlag = false;
// let eraserFlag = false;

optionsCont.addEventListener("click", (e) => {
    // true -> tools show, false -> hide tools
    optionsFlag = !optionsFlag;

    if (optionsFlag) openTools();
    else closeTools();
})


function openTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-angles-right");
    iconElem.classList.add("fa-angles-left");
    toolsCont.style.display = "flex";
}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-angles-left");
    iconElem.classList.add("fa-angles-right");
    toolsCont.style.display = "none";
}

// let currTool = "pencil";

pencil.addEventListener("click", function (e) {

    console.log("Pencil Tool Clicked");
    socket.emit("pencilToolChange",currTool);
    // alert("Emitted from here");

    // if (currTool == "pencil") {
    //     //DOuble click on pencil
    //     options[0].style.display = "flex";
    // } else {
    //     for (let i = 0; i < options.length; i++) {
    //         options[i].style.display = "none";
    //     }
    //     if (currTool == "eraser")
    //         tool.strokeStyle = "lightcoral";
    //     currTool = "pencil";
    //     tool.lineWidth = pencilSize;
    // }
})

eraser.addEventListener("click", function (e) {

    console.log("Eraser Clicked");
    // alert("Eraser Clicked");

    socket.emit("eraserToolChange",currTool);
    // alert("Emitted from here");

    // if (currTool == "eraser") {
    //     //DOuble click on pencil
    //     options[1].style.display = "flex";
    // } else {
    //     for (let i = 0; i < options.length; i++) {
    //         options[i].style.display = "none";
    //     }
    //     tool.strokeStyle = "white";
    //     currTool = "eraser";
    //     tool.lineWidth = eraserSize;
    // }
})

rect.addEventListener("click", function (e) {
    console.log("Rectangle Clicked");
    // alert("Eraser Clicked");

    socket.emit("rectToolChange",currTool);
    // alert("Emitted from here");

    // if (currTool == "rect") {
    //     //DOuble click on pencil
    //     options[2].style.display = "flex";
    // } else {
    //     for (let i = 0; i < options.length; i++) {
    //         options[i].style.display = "none";
    //     }
    //     if (currTool == "eraser")
    //         tool.strokeStyle = "lightcoral";
    //     currTool = "rect";
    //     tool.lineWidth = rectSize;
    // }
})

line.addEventListener("click", function (e) {

    console.log("Line Clicked");
    // alert("Eraser Clicked");

    socket.emit("lineToolChange",currTool);
    // alert("Emitted from here");

    // if (currTool == "line") {
    //     //DOuble click on pencil
    //     options[3].style.display = "flex";
    // } else {
    //     for (let i = 0; i < options.length; i++) {
    //         options[i].style.display = "none";
    //     }
    //     if (currTool == "eraser")
    //         tool.strokeStyle = "lightcoral";
    //     currTool = "line";
    //     tool.lineWidth = lineSize;
    // }
})

// rect.addEventListener("click", function () {
//     currTool = "rect";
//     console.log("Sending Tool CHange");
//     // socket.emit("toolChange",currTool);
// })

// line.addEventListener("click", function () {
//     currTool = "line";
//     // socket.emit("toolChange",currTool);
// })

// pencil.addEventListener("click", function () {
//     currTool = "pencil";
//     // socket.emit("toolChange",currTool);
// })

let pencilSize = 2;
let eraserSize = 10;
let rectSize = 2;
let lineSize = 2;

let sizebox = document.querySelectorAll(".size-box");

sizebox[0].addEventListener("click", function (e) {

    socket.emit("box0",e.target.classList);

    // let elems = ["size1", "size2", "size3", "size4"];

    // let allClasses = e.target.classList;
    // let firstClass = allClasses[0];

    // let isPresent = elems.includes(firstClass);

    // if (isPresent) {
    //     if (firstClass == "size1") {
    //         pencilSize = 5;
    //     }
    //     else if (firstClass == "size2") {
    //         pencilSize = 10;
    //     } else if (firstClass == "size3") {
    //         pencilSize = 15;
    //     } else if (firstClass == "size4") {
    //         pencilSize = 20;
    //     }
    // }
    // tool.lineWidth = pencilSize;
})

sizebox[1].addEventListener("click", function (e) {

    socket.emit("box1",e.target.classList);

    // let elems = ["size1", "size2", "size3", "size4"];

    // let allClasses = e.target.classList;
    // let firstClass = allClasses[0];

    // let isPresent = elems.includes(firstClass);

    // if (isPresent) {
    //     if (firstClass == "size1") {
    //         eraserSize = 5;
    //     }
    //     else if (firstClass == "size2") {
    //         eraserSize = 10;
    //     } else if (firstClass == "size3") {
    //         eraserSize = 15;
    //     } else if (firstClass == "size4") {
    //         eraserSize = 20;
    //     }
    // }

    // tool.lineWidth = eraserSize;
})

sizebox[2].addEventListener("click", function (e) {

    socket.emit("box2",e.target.classList);

    // let elems = ["size1", "size2", "size3", "size4"];

    // let allClasses = e.target.classList;
    // let firstClass = allClasses[0];

    // let isPresent = elems.includes(firstClass);

    // if (isPresent) {
    //     if (firstClass == "size1") {
    //         rectSize = 5;
    //     }
    //     else if (firstClass == "size2") {
    //         rectSize = 10;
    //     } else if (firstClass == "size3") {
    //         rectSize = 15;
    //     } else if (firstClass == "size4") {
    //         rectSize = 20;
    //     }
    // }
    // tool.lineWidth = rectSize;
})

sizebox[3].addEventListener("click", function (e) {

    socket.emit("box3",e.target.classList);

    // let elems = ["size1", "size2", "size3", "size4"];

    // let allClasses = e.target.classList;
    // let firstClass = allClasses[0];

    // let isPresent = elems.includes(firstClass);

    // if (isPresent) {
    //     if (firstClass == "size1") {
    //         lineSize = 5;
    //     }
    //     else if (firstClass == "size2") {
    //         lineSize = 10;
    //     } else if (firstClass == "size3") {
    //         lineSize = 15;
    //     } else if (firstClass == "size4") {
    //         lineSize = 20;
    //     }
    // }

    // tool.lineWidth = lineSize;
})

download.addEventListener("click",function(e){

    // alert('Download Clicked');
    let canvas = document.querySelector("canvas");
    let url = canvas.toDataURL();

    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
    // alert('Download Clicked Ended');
})

socket.on("eraserToolChange",data=>{
    currTool = data;
    console.log("Eraser Data Recieved successfully on Frontend");

    if (currTool == "eraser") {
        //DOuble click on pencil
        options[1].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.strokeStyle = "white";
        currTool = "eraser";
        tool.lineWidth = eraserSize;
    }
})

socket.on("pencilToolChange",data=>{
    currTool = data;
    console.log("Pencil Data Recieved successfully on Frontend");

    if (currTool == "pencil") {
        //DOuble click on pencil
        options[0].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        if (currTool == "eraser")
            tool.strokeStyle = "black";
        currTool = "pencil";
        tool.lineWidth = pencilSize;
    }
})


socket.on("lineToolChange",data=>{

    currTool = data;
    console.log("Line Data Recieved successfully on Frontend");

    if (currTool == "line") {
        //DOuble click on pencil
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        if (currTool == "eraser")
            tool.strokeStyle = "black";
        currTool = "line";
        tool.lineWidth = lineSize;
    }
})

socket.on("rectToolChange",data=>{

    currTool = data;
    console.log("Rectagle Data Recieved successfully on Frontend");

    if (currTool == "rect") {
        //DOuble click on pencil
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        if (currTool == "eraser")
            tool.strokeStyle = "black";
        currTool = "rect";
        tool.lineWidth = rectSize;
    }
    
})

socket.on("box0",e=>{

    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            pencilSize = 2;
        }
        else if (firstClass == "size2") {
            pencilSize = 4;
        } else if (firstClass == "size3") {
            pencilSize = 8;
        } else if (firstClass == "size4") {
            pencilSize = 10;
        }
    }
    tool.lineWidth = pencilSize;

    console.log("Box 0");
})

socket.on("box1",e=>{
    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            eraserSize = 5;
        }
        else if (firstClass == "size2") {
            eraserSize = 10;
        } else if (firstClass == "size3") {
            eraserSize = 15;
        } else if (firstClass == "size4") {
            eraserSize = 20;
        }
    }

    tool.lineWidth = eraserSize;
    console.log("Box1");
})

socket.on("box2",e=>{

    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            rectSize = 2;
        }
        else if (firstClass == "size2") {
            rectSize = 4;
        } else if (firstClass == "size3") {
            rectSize = 8;
        } else if (firstClass == "size4") {
            rectSize = 12;
        }
    }
    tool.lineWidth = rectSize;
    console.log("box2");
})

socket.on("box3",e=>{
    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            lineSize = 2;
        }
        else if (firstClass == "size2") {
            lineSize = 4;
        } else if (firstClass == "size3") {
            lineSize = 8;
        } else if (firstClass == "size4") {
            lineSize = 12;
        }
    }

    tool.lineWidth = lineSize;
    console.log("Box3");
})




