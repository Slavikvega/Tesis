var color = '#FFF'
var strokeWidth = 4
var socket;
var cv ;
function setup() {
    // Creating canvas
   cv = createCanvas(800, 600)
    //cv.position(600, 100)
    cv.background(122)
    cv.parent("#js--ux");


    socket = io();

    socket.on('mouse', data => {
        stroke(data.color);
        strokeWeight(data.strokeWidth);
        line(data.x, data.y, data.px, data.py);
    });

    // Getting our buttons and the holder through the p5.js dom
    const color_picker = select('#pickcolor')
    const color_btn = select('#color-btn')
    const color_holder = select('#color-holder')

    const stroke_width_picker = select('#stroke-width-picker')
    const stroke_btn = select('#stroke-btn')

function Draw(){

}

    // Adding a mousePressed listener to the button
/*    color_btn.mousePressed(() => {
        // Checking if the input is a valid hex color
        if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color_picker.value())) {
            color = color_picker.value()
            color_holder.style('background-color', color)
        }
        else { console.log('Enter a valid hex value') }
    })

    // Adding a mousePressed listener to the button
    stroke_btn.mousePressed(() => {
        var width = parseInt(stroke_width_picker.value())
        if (width > 0) strokeWidth = width
    })*/
}

function mouseDragged() {
    // Draw
    stroke(0,0,255)
    strokeWeight(1)
    noFill()
    ellipse(mouseX, mouseY, 30)

    // Send the mouse coordinates
    sendmouse(int(mouseX), int(mouseY), pmouseX, pmouseY)
}

// Sending data to the socket
function sendmouse( x, y, pX, pY) {
    var data = {
      id: socket.id ,
        x: x,
        y: y,
        px: pX,
        py: pY,
    }

    socket.emit('mouse', data)
}
