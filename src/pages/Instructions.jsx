import TerminalHeading from "../components/TerminalHeading";

const Instructions = () => {
  return (
    <main>
      <div className="terminal-container terminal-fullpage">
        <div className="terminal">
          <p id="regler">
            Kom ihåg:
            <br />
            <br />
            §1 Alla som spelar måste vara medlemmar i Digital Ungdom.
            <br />
            <br />
            §2 En bot per medlem.
            <br />
            <br />
            §3 Du får inte kalla din bot något olämpligt.
            <br />
            <br />
            §4 All skadegörelse på servern är förbjuden.
          </p>
          <TerminalHeading heading="Så här skapar du din egna bot med javascript:" />
          <p>
            Clone (Download) this repository:{" "}
            <a
              href="https://github.com/digitalungdom-se/game-client-js"
              target="_blank"
              rel="noreferrer"
            >
              github.com/digitalungdom-se/game-client-js
            </a>
            .<br />
            <br />
            Open /index.js.
            <br />
            <br />
            Inside index.js you can change the username and class of your bot!
            <br />
            <br />
            Next go to src/Client.js.
            <br />
            <br />
            Inside Client.js you can add your own code that allows your bot to
            react to bullets and others players. Add this code to the onUpdate()
            function.
            <br />
            <br />
            When you want to test your bot simply go to your terminal and run{" "}
            <i>node index.js</i> and then see your bot at{" "}
            <a
              href="http://173.212.232.13:8080/"
              target="_blank"
              rel="noreferrer"
            >
              173.212.232.13:8080/
            </a>
            .
          </p>
          <TerminalHeading heading="Så här skapar du din egna bot med python:" />
          <a
            href="https://github.com/digitalungdom-se/game-client-python"
            target="_blank"
            rel="noreferrer"
          >
            Läs instruktionerna här
          </a>
        </div>
      </div>
    </main>
  );
};

export default Instructions;
