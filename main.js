var mouseEvent =  "",lastMouseX,lastMouseY;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
        
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_mouseX = e.clientX - canvas.offsetLeft;
    current_mouseY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle =color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lastMouseX,lastMouseY);
        ctx.lineTo(current_mouseX,current_mouseY);

        /*console.log("cX: "+ current_mouseX);
        console.log("cY: "+ current_mouseY);
        console.log("lX: "+ lastMouseX);
        console.log("lY: "+ lastMouseY);*/
    }

    lastMouseX = current_mouseX;
    lastMouseY = current_mouseY;
    
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



