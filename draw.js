let body = document.querySelector("body");

let iX,iY,fX,fY;

//How much bottom the canvas is from screen
let boardTop = canvasBoard.getBoundingClientRect().top;

//How much left it is from screen
let boardLeft = canvasBoard.getBoundingClientRect().left;

let drawingMode = false;

body.addEventListener("mousedown",function(e){

    let xPos = e.clientX + boardLeft;
    let yPos = e.clientY - boardTop;

    iX = xPos;
    iY = yPos;

    if(currTool == "pencil" || currTool =="eraser"){
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(iX,iY);
    }

    console.log(currTool);
    
    // alert("Mouse was clicked at " + xPos + " " + yPos);
})

body.addEventListener("mousemove",function(e){

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

body.addEventListener("mouseup",function(e){

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
    // alert("Mouse was released at " + xPos + " " + yPos);
})

