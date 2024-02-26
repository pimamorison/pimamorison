class Ball{
  constructor(x, y, size, bulbsound, xspeed, yspeed){
    // Position and speed given as arrays. Loop through     // array to change ball location.  
    this.size = size;
    this.pos = [x, y]
  
    this.glow = 255;
    this.speed = [xspeed, yspeed]
    this.glowdown = 1;
    this.glowup = 15;
    this.justbounced = false;
    this.bulbsound = bulbsound;
  }
  show() {
    if(this.justbounced) {
      this.glow = this.glow + this.glowup
      if (this.glow >= 270) {
        this.justbounced = false;
      }
    }
    else {
      this.glow = this.glow - this.glowdown;
    }
    noStroke();
    fill(this.glow, 0, 0);
    ellipse(this.pos[0], this.pos[1], this.size);
  }
  
  move() {
    let dims = [width, height]
    for (var i = 0; i < this.pos.length; i++) {
      this.pos[i] = this.pos[i] + this.speed[i]
      if(this.pos[i] <= this.size / 2 || this.pos[i] >= dims[i] - this.size / 2)           {
        this.bulbsound.play();
        this.speed[i] = this.speed[i] * - 1;
        this.justbounced = true;
      }
    }
  }
}