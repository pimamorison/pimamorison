var blob;
var blob2;
var bulbsound;
var num_blobs;
var blob_list = [];

function preload () {
  bulbsound = loadSound("bulby.m4a")
}
function setup(){
  createCanvas(600, 600)
  blob = new Ball(100, 100, 80, bulbsound);
  num_blobs = 5;
  var area = width * height;
  for (let i = 0; i < num_blobs; i++) {
    x = Math.random() * (width - 160) + 81;
    y = Math.random() * (height - 160) + 81;
    xspeed = Math.random() * 1.5 + 0.2;
    yspeed = Math.random() * 1.5 + 0.2;
    var size = Math.sqrt(area) / 6- 14 * (xspeed * yspeed);
    blob_list[i] = new Ball(x, y, size, bulbsound, xspeed, yspeed)
  }
}

function draw(){
  background(0);
  
  for(var i = 0; i < num_blobs; i++) {
    blob_list[i].show();
    blob_list[i].move();
  }
}