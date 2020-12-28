import logo from "../assets/logo.png";
import CountDown from "../components/CountDown";
import ProgressBar from "../components/ProgressBar";
import TerminalHeading from "../components/TerminalHeading";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <main>
      <div className="hero bgd">
        <img src={logo} alt="Bot-attack"></img>
        <h2>DIY Client Game</h2>
        <h3>by Digital Ungdom</h3>
        <CountDown start={props.start} stop={props.stop} isnav={false} />
        <ProgressBar start={props.start} stop={props.stop} />
        <div className="overlay"></div>
      </div>
      <div className="terminal-container">
        <div className="terminal">
          <p>
            Välkommen till Digital Ungdoms spelevent 2020!
            <br />
            <br />
            Du kommer idag få spela ett DIY-client spel där du nästan utan
            programmeringskunskaper kan skapa din egna bot och tävla mot andra
            medlemmar.
            <br />
            <br />
            Den riktiga tävlingen börjar den 31:a, så du har tid på dig att
            skapa den perfekta boten!
            <br />
            <br />
            <div className="container" style={{ margin: "30px 0 50px 0" }}>
              <Link
                style={{
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.5)",
                  marginRight: 12,
                  textDecoration: "none"
                }}
                to="/spelet"
                onClick={props.opengame}
              >
                Öppna spelet
              </Link>
              <Link
                style={{
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.5)",
                  marginLeft: 12,
                  textDecoration: "none"
                }}
                to="/instruktioner"
              >
                Skapa din egna bot
              </Link>
            </div>
          </p>
          <div className="footer">
            <a href="https://www.freepik.com/vectors/winter">Winter vector skapad av vectorpouch - www.freepik.com</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
