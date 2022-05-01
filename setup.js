let canvasBoard = document.querySelector("canvas");

canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;

// console.log(canvasBoard.height,canvasBoard.width);

let tool = canvasBoard.getContext("2d");
tool.strokeStyle = "lightcoral";