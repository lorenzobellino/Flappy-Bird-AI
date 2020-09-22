class Pipe {

  constructor() {
    this.spacing = 125;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6;
  }
  // hits(bird){
  //   let halfBirdHeight = bird.height / 2;
  //   let halfBirdwidth = bird.width / 2;
  //   if (bird.y - halfBirdHeight < this.top || bird.y + halfBirdHeight > this.bottom) {
  //     if (bird.x + halfBirdwidth > this.x && bird.x - halfBirdwidth < this.x + this.w) {
  //         return true;
  //     }
  //   }
  //   return false;
  // }
  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }

  // show() {
  //     image(pipeTop,this.x,0,this.w,this.top);
  //     image(pipeBottom, this.x,this.bottom ,this.w,0);
  //   }
  show() {
    fill(34,139,34);
    rectMode(CORNER);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
