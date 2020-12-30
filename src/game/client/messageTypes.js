// Messages types version 1 (prototype)

export const FromServer = {
  Register: 0,
  Joined: 1,
  Entities: 2,
  Error: 3,
};

// Messages sent from the client
export const FromClient = {
  Join: 0, // Player requests to spawn. ex: "{"type": 0, "username": "name", "class": 0}"
  UpdateDirection: 1, // Player sends move direction. ex: "{"type": 1, "x": 0.82, "y": -0.47}"
  FireBullet: 2, // Fires a bullet in a given direction. ex: "{"type": 2, "directionX": 0.82, "directionY": -0.47}"
};
