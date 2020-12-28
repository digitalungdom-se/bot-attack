import "./App.css";
import CountDown from "./components/CountDown";
import MobileMenuButton from "./components/MobileMenuButton";
import Home from "./pages/Home";
import Scoreboard from "./components/Scoreboard";
import Game from "./pages/Game";
import Instructions from "./pages/Instructions";
import Rules from "./pages/Rules";
import NotFound from "./pages/404";
import { Route, Switch, NavLink } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

var startDate = "2020-12-31T18:00";
var stopDate = "2021-01-02T18:00";

function opengame() {
  window.location.href = "/spelet";
}

export default function App() {
  return (
    <div className="site">
      <nav>
        <div className="container">
          <ul>
            <MobileMenuButton />
            <li>
              <NavLink exact to="/" activeClassName="selected">
                Hem
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/regler" activeClassName="selected">
                Regler
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/spelet"
                activeClassName="selected"
                onClick={opengame}
              >
                Öppna spelet
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/instruktioner" activeClassName="selected">
                Skapa din bot
              </NavLink>
            </li>
            <li>
              <a href="https://digitalungdom.se/" className="about">
                Digital Ungdom
              </a>
            </li>
          </ul>
          <CountDown start={startDate} stop={stopDate} isnav={true} />
        </div>
      </nav>
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home start={startDate} stop={stopDate} opengame={opengame} />
          </Route>
          <Route path="/spelet">
            <Game />
          </Route>
          <Route path="/regler">
            <Rules />
          </Route>
          <Route path="/instruktioner">
            <Instructions />
          </Route>
          <Route exact>
            <NotFound />
          </Route>
        </Switch>
      </ScrollToTop>
    </div>
  );
}
