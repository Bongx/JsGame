export default class Paddle {
  constructor(gameWidth, gameLength) {
    this.width = 150;
    this.height = 20;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameLength - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#e71d36";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.x += 5 / deltaTime;
  }
}
