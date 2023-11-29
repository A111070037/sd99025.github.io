function setup() {
    // put setup code here
    createCanvas(480, 360);
    background('#ffaaee');
}
function draw() {
    // put drawing code here
    r = random{255};
    g = random{255};
    b = rabdom{255};
    storkeColor = color(r,g,b);
    x1 = width/2;
    y2 = height/2;
    x2 = random(0,width);
    y2 = random(0,height/2);
    strok(strokeColor);
    strokeWeight(8);
    line(x1,y1,x2,y2);
}