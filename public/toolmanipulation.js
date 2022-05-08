
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
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
    toolsCont.style.display = "flex";
}
function closeTools() {
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
    toolsCont.style.display = "none";
}

// let currTool = "pencil";

pencil.addEventListener("click", function (e) {
    if (currTool == "pencil") {
        //DOuble click on pencil
        options[0].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        if (currTool == "eraser")
            tool.strokeStyle = "lightcoral";
        currTool = "pencil";
        tool.lineWidth = pencilSize;
    }
})

eraser.addEventListener("click", function (e) {
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

rect.addEventListener("click", function (e) {
    if (currTool == "rect") {
        //DOuble click on pencil
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        if (currTool == "eraser")
            tool.strokeStyle = "lightcoral";
        currTool = "rect";
        tool.lineWidth = rectSize;
    }
})

line.addEventListener("click", function (e) {
    if (currTool == "line") {
        //DOuble click on pencil
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        if (currTool == "eraser")
            tool.strokeStyle = "lightcoral";
        currTool = "line";
        tool.lineWidth = lineSize;
    }
})

rect.addEventListener("click", function () {
    currTool = "rect";
})

line.addEventListener("click", function () {
    currTool = "line";
})

pencil.addEventListener("click", function () {
    currTool = "pencil";
})

let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;

let sizebox = document.querySelectorAll(".size-box");

sizebox[0].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            pencilSize = 5;
        }
        else if (firstClass == "size2") {
            pencilSize = 10;
        } else if (firstClass == "size3") {
            pencilSize = 15;
        } else if (firstClass == "size4") {
            pencilSize = 20;
        }
    }
    tool.lineWidth = pencilSize;
})

sizebox[1].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
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
})

sizebox[2].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            rectSize = 5;
        }
        else if (firstClass == "size2") {
            rectSize = 10;
        } else if (firstClass == "size3") {
            rectSize = 15;
        } else if (firstClass == "size4") {
            rectSize = 20;
        }
    }
    tool.lineWidth = rectSize;
})

sizebox[3].addEventListener("click", function (e) {

    let elems = ["size1", "size2", "size3", "size4"];

    let allClasses = e.target.classList;
    let firstClass = allClasses[0];

    let isPresent = elems.includes(firstClass);

    if (isPresent) {
        if (firstClass == "size1") {
            lineSize = 5;
        }
        else if (firstClass == "size2") {
            lineSize = 10;
        } else if (firstClass == "size3") {
            lineSize = 15;
        } else if (firstClass == "size4") {
            lineSize = 20;
        }
    }

    tool.lineWidth = lineSize;
})

download.addEventListener("click",function(e){

    // alert('Download Clicked');
    let canvas = document.querySelector("canvas");
    let url = canvas.toDataURL();

    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
    alert('Download Clicked Ended');
})




