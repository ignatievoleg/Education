const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
const clear = document.getElementById('clean');
let color = 'black';
let range = 10 ;

document.getElementById('color').oninput = function() {
    color = this.value;
}
document.getElementById('range').oninput = function() {
    range = this.value;
}

clear.onclick = function () {
    context.clearRect(0,0,1200,600);
}


canvas.onmousedown = function paint(event) {
    canvas.onmousemove = function (event) {
        const x = event.offsetX;
        const y = event.offsetY;
        const dx = event.movementX;
        const dy = event.movementY;

        context.lineCap = "round";
        context.lineWidth = range;
        context.strokeStyle = color;
        context.fill();

        if (event.buttons > 0) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - dx, y - dy);
            context.stroke();
            context.closePath();
        }
    }
    document.onmouseup = function () {
        canvas.onmousemove = null;
    }

}

