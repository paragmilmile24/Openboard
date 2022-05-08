let red = document.querySelector(".red");       //Way 1
let green = document.querySelector(".green");      //Way 2
let blue = document.querySelector(".blue");

red.addEventListener("click",function(e){
    tool.strokeStyle = "lightcoral";
});

green.addEventListener("click",function(e){
    tool.strokeStyle = "lightgreen";
})

blue.addEventListener("click",function(e){
    tool.strokeStyle = "lightblue";
})