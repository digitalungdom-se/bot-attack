export default class Client {
  constructor() {
    this.id = "";
    this.myPlayer = null;
    this.webSocket = null;

    this.players = {};
    this.bullets = {};
    this.hallOfFame = [];
  }

  // Updates about 38 times a second.
  // Here you may add code that makes your client react to it's surroundings and fight!
  onUpdate() {
    // Update all the bullets
    for (const bulletId in this.bullets) {
      this.bullets[bulletId].update();
    }
  }
}
