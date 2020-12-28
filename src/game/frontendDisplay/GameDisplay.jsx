import * as React from "react";
import Client from "../client/Client";
import handleMessage from "../client/ClientHandle";
import config from "../config";

const webSocket = new WebSocket("ws://173.212.232.13:52300");
let client = new Client();

const GameDisplay = ({ setHallOfFame }) => {
  const canvasRef = React.useRef(null);
  const [context, setContext] = React.useState(null);
  const [players, setPlayers] = React.useState({});
  const [bullets, setBullets] = React.useState({});

  React.useEffect(() => {
    // Start the update loop of the server, it will update all the players every x milliseconds
    const interval = setInterval(() => {
      client.onUpdate();
      setPlayers(client.players);
      setBullets(client.bullets);
      setHallOfFame(client.hallOfFame);

      if (context) {
        // Clear the old canvas
        context.clearRect(0, 0, config.MAP_WIDTH, config.MAP_HEIGHT);

        // Draw all the players
        for (const playerId in players) {
          let player = players[playerId];

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
            player.position.x - player.username.length * 2,
            player.position.y - 10
          );

          // Draw kills
          context.fillStyle = "#20d085";
          context.fillText(
            "kills: " + player.kills,
            player.position.x + (player.health.toFixed(0) + "/100").length + 8,
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
        for (const bulletId in bullets) {
          let bullet = bullets[bulletId];

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
    }, 1000 / config.TICKS_PER_SECONDS);

    webSocket.addEventListener("open", () => {
      // The client is connected
      client.webSocket = webSocket;

      // Begin listening to all incoming messages from the server
      webSocket.onmessage = function (event) {
        handleMessage(event.data, client);
      };

      // If the server closes the connection
      webSocket.onclose = function (event) {
        // Just reset the client for now
        client = new Client();
        alert("The server has closed, refresh the page to try and reconnect");
      };
    });

    return () => clearInterval(interval);
  }, [context, players, bullets]);

  return (
    <div>
      <h1 style={{margin: 0}}>SPELET</h1>
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
            marginRight: 70
          }}
        />
      </div>
    </div>
  );
};

export default GameDisplay;
