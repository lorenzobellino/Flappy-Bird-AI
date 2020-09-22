
class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 64;

    this.gravity = 0.6;
    this.lift = -10;
    this.velocity = 0;

    this.icon = birdImg;
    this.width = 64;
    this.height = 64;

    this.brain = new NeuralNetwork(4,4,1);
  }

  show() {
    image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  up() {
    this.velocity = this.lift;
  }

  think(pipes){
    let closest = null;
    let closestD = Infinity;

    for(let i = 0; i< pipes.lenght; i++){
      let d = pipes[i].x - this.x;
      if(d < closestD){
        closest = pipes[i];
        closestD = d;
      }
    }
    let inputs = [];
    inputs[0] = this.y / height;
    inputs[1] = closest.top / height;
    inputs[2] = closest.bottom / height;
    inputs[3] = closest.x / width;

    let output = this.brain.predict(inputs);
    if(output[0] > 0.5){
      this.up();
    }
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height / 2) {
      this.y = height - this.height / 2;
      this.velocity = 0;
    }

    if (this.y <= this.height / 2) {
      this.y = this.height / 2;
      this.velocity = 0;
    }
  }
}
