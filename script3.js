function onRectangle(e) {
    console.log('Clicked')
    console.log(e)
    e.remove()
}

function testTriangle() {
    drawTriangle(0, 100, 100, 100, 50, 0)
}

function drawTriangle(p1x, p1y, p2x, p2y, p3x, p3y){
    var snippet = `
        <polygon points="${p1x},${p1y} ${p2x},${p2y} ${p3x},${p3y}">
    `

    var container = document.querySelector('svg');
    container.innerHTML += snippet;
}