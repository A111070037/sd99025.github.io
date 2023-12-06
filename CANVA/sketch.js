function setup() {
    // put setup code here
    createCanvas(400, 300);
    background(0);
    strokeColor = 'yellow';
    stroke(strokeColor);
    noFill();
    x1 = weigh/3;
    y1 = height*4/5;
    x2 = weigh/3*2;
    y2 = height*4/5;
}

function draw() {
    // put drawing code here
    background(0);
    triangle(x1, y1, x2, y2, mouseX, mouseY);
}