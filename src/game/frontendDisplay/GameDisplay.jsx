import * as React from "react";
import config from "../config";
import { FromServer } from "../client/messageTypes";

const GameDisplay = ({ setHallOfFame }) => {
  const canvasRef = React.useRef(null);
  const [context, setContext] = React.useState(null);
  const webSocket = new WebSocket("ws://api.bot-attack.digitalungdom.se");

  webSocket.addEventListener("open", () => {
    webSocket.onmessage = function (event) {
      const jsonData = JSON.parse(event.data);
      if (jsonData.type === FromServer.Entities) {
        drawEntities(jsonData.players, jsonData.bullets);
      }
    };

    webSocket.onclose = function () {
      alert("The server has closed, refresh the page to try and reconnect");
    };
  });

  const drawEntities = (players, bullets) => {
    if (context) {
      // Clear the old canvas
      context.clearRect(0, 0, config.MAP_WIDTH, config.MAP_HEIGHT);

      // Draw all the players
      for (let i = 0; i < players.length; i++) {
        let player = players[i];

        // Draw username
        context.fillStyle = "#000";
        context.font = "10px Arial";
        context.fillText(
          player.username,
          player.position.x - player.username.length * 2,
          player.position.y - 18
        );

        // Draw health
        context.fillStyle = "red";
        context.fillText(
          player.health.toFixed(0) + "/100",
          player.position.x - (player.health.toFixed(0) + "/100").length * 2.5,
          player.position.y - 10
        );

        // Draw kills
        context.fillStyle = "#333333";
        context.fillText(
          "kills: " + player.kills,
          player.position.x + (player.health.toFixed(0) + "/100").length + 16,
          player.position.y - 10
        );

        // Draw player body, TODO: Add anna.svg
        context.beginPath();
        context.fillStyle = "#1e6ee8";
        context.arc(
          player.position.x,
          player.position.y,
          5,
          0,
          Math.PI * 2,
          true
        );
        context.fill();
        context.fillStyle = "#0b6e75";
        context.closePath();
      }

      // Draw all the bullets
      for (let i = 0; i < bullets.length; i++) {
        let bullet = bullets[i];

        // Draw bullet
        context.beginPath();
        context.fillStyle = "#555555";
        context.arc(
          bullet.position.x,
          bullet.position.y,
          bullet.radius,
          0,
          Math.PI * 2,
          true
        );
        context.fill();
        context.fillStyle = "#000";
        context.closePath();
      }
    }

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext("2d");

      if (renderCtx) {
        setContext(renderCtx);
      }
    }
  };

  return (
    <div>
      <h1 style={{ margin: 0 }}>SPELET</h1>
      <h4>Skrolla för att utforska arenan!</h4>
      <div>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={config.MAP_WIDTH}
          height={config.MAP_HEIGHT}
          style={{
            border: "2px solid #000",
            marginTop: 10,
            marginRight: 70,
          }}
        />
      </div>
    </div>
  );
};

export default GameDisplay;
