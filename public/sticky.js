let stickyB = document.querySelector("#stickyB");

let upload = document.querySelector("#upload");


stickyB.addEventListener("click", function (e) {

    // alert("Stcik CLicked");

    let stickyTemplateHTML = 
        `<div class="navbar">
            <div class="minimise"></div>
            <div class="close"></div>
        </div>
        <textarea name="" class="textarea"></textarea>`;

    createSticky(stickyTemplateHTML);
})

upload.addEventListener("click",(e)=>{

    let input = document.createElement("input");
    input.setAttribute("type","file");
    input.click();

    input.addEventListener("change",(e1)=>{
        let file = input.files[0];
        let url = URL.createObjectURL(file);

        let stickyTemplateHTML = 
            `<div class="navbar">
                <div class="minimise"></div>
                <div class="close"></div>
            </div>
            <img src="${url}" class="textarea"/>
            `;

        createSticky(stickyTemplateHTML);
         
    })

})

function createSticky(stickyTemplateHTML){
    let sticky = document.createElement("div");
        sticky.setAttribute("class", "sticky");
    
        sticky.innerHTML = stickyTemplateHTML;

        body.appendChild(sticky);
    
        let minimise = sticky.querySelector(".minimise");
        let close = sticky.querySelector(".close");
    
        let textarea = sticky.querySelector(".textarea");
    
        let isClosed = false;
    
        minimise.addEventListener("click", function () {
    
            if (isClosed == false) {
                textarea.style.display = "none";
            } else {
                textarea.style.display = "block";
            }
    
            isClosed = !isClosed;
        })
    
        close.addEventListener("click", function () {
            sticky.remove();
        })
    
        sticky.onmousedown = function(event){
            currTool = "pqrs";
            dragAndDrop(sticky,event);
        }
    
        sticky.ondragstart = function() {
            return false;
          };

}


function dragAndDrop(element,event){
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;
  
    element.style.position = 'absolute';
    element.style.zIndex = 1000;
  
    moveAt(event.pageX, event.pageY);
  
    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        element.style.left = pageX - shiftX + 'px';
        element.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the ball, remove unneeded handlers
    element.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };
}



