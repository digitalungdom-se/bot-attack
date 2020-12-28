import Vector2 from "./Vector2";

export default class Bullet {
  constructor(bulletData) {
    this.id = bulletData.id;

    this.position = new Vector2(bulletData.posX, bulletData.posY);
    this.direction = new Vector2(bulletData.dirX, bulletData.dirY);

    this.radius = Number(bulletData.radius);
    this.speed = Number(bulletData.speed);
  }

  update() {
    this.position = this.position.add(this.direction);
  }

  displayInfo() {
    return `(${this.id} | ${this.radius} )`;
  }
}
