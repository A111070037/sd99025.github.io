var angle = 0.0;
var rot_step = 1;
let toggle = 0;
var toggleColor=8;
var r = 30;

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    // 房子的主體
    fill(150, 75, 0); // 棕色
    rect(100, 200, 200, 150);
  
    // 房頂
    fill(100, 100, 100); // 灰色
    triangle(100, 200, 200, 100, 300, 200);
  
    // 窗戶
    fill(200); // 白色
    rect(130, 230, 40, 40);
    rect(230, 230, 40, 40);
  
    // 門
    fill(0, 0, 150); // 藍色
    rect(185, 275, 30, 75);
  
    // 門的手把
    fill(255); // 白色
    ellipse(210, 315, 10, 10);
  
    // 陽台
    fill(100, 100, 100); // 灰色
    rect(150, 275, 100, 15);
  }