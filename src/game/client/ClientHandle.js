import { fromServer } from "./messageTypes";
import Client from "./Client";
import Player from "./Player";
import Bullet from "./Bullet";

////////////////////////////////////////////////////////////////////////////////
//                         HANDLE MESSAGE FROM SOCKET                         //
////////////////////////////////////////////////////////////////////////////////
const messageHandlers = {
  [fromServer.register]: register,
  [fromServer.spawnPlayer]: spawnPlayer,
  [fromServer.spawnBullet]: spawnBullet,
  [fromServer.despawnPlayer]: despawnPlayer,
  [fromServer.despawnBullet]: despawnBullet,
  [fromServer.error]: error,
  [fromServer.updatePosition]: updatePosition,
  [fromServer.updateDirection]: updateDirection,
  [fromServer.updateHealth]: updateHealth,
  [fromServer.updateHallOfFame]: updateHallOfFame,
};

function handleMessage(data, client) {
  try {
    let jsonData = JSON.parse(data);
    messageHandlers[jsonData.type](jsonData, client);
  } catch (err) {
    printError(err, data);
  }
}

function printError(err, data) {
  let typeName = "undefined";
  for (const key in fromServer) {
    if (fromServer[key] === JSON.parse(data).type) {
      typeName = key;
    }
  }
  if (typeName === "undefined") {
    console.log(
      "A message with an undefined type has been sent. Did you forget to add a key value pair to messageHandlers?"
    );
  } else {
    console.log(`Error receiving message of type '${typeName}': ` + err);
  }
}

////////////////////////////////////////////////////////////////////////////////
//                        MESSAGE HANDLER FUNCTIONS                           //
////////////////////////////////////////////////////////////////////////////////
function register(jsonData, client) {
  client.id = jsonData.id;
}

function spawnPlayer(jsonData, client = Client) {
  let player = new Player(jsonData, client);
  client.players[player.id] = player;

  if (player.isMyPlayer === true) {
    client.myPlayer = player;
  }
}

function despawnPlayer(jsonData, client) {
  delete client.players[jsonData.id];
}

function spawnBullet(jsonData, client) {
  let bullet = new Bullet(jsonData);
  client.bullets[bullet.id] = bullet;
}

function despawnBullet(jsonData, client) {
  delete client.bullets[jsonData.id];
}

function error(jsonData, client) {
  console.log(jsonData.message);
}

function updatePosition(jsonData, client) {
  client.players[jsonData.id].setPosition(jsonData.x, jsonData.y);
}

function updateDirection(jsonData, client) {
  client.players[jsonData.id].setDirection(jsonData.x, jsonData.y);
}

function updateHealth(jsonData, client) {
  client.players[jsonData.id].setHealth(jsonData.health);
}

function updateHallOfFame(jsonData, client) {
  client.hallOfFame = jsonData.hallOfFame;
}

export default handleMessage;
