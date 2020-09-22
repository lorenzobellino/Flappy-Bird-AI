class Pipe{
  constructor(){
    this.spacing = 180;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = this.top + this.spacing;

    this.x = width;
    this.w = 80;
    this.speed = 3;

    this.passed = false;
  }

  pass(bird) {
    if (bird.x > this.x && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }

  hits(bird){
    let halfBirdHeight = bird.height / 2;
    let halfBirdwidth = bird.width / 2;
    if (bird.y - halfBirdHeight < this.top || bird.y + halfBirdHeight > this.bottom) {
      if (bird.x + halfBirdwidth > this.x && bird.x - halfBirdwidth < this.x + this.w) {
        return true;
      }
     }
    return false;
}


show() {
    image(pipeTop,this.x,0,this.w,this.top);
    image(pipeBottom, this.x,this.bottom ,this.w,0);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    return (this.x < -this.w);
  }
}
