import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import Play from "./components/play.component";
import Leaderboard from "./components/leaderboard.component";
import Logout from "./components/logout.component";

function App() {
  return (
    <div>
      <header className="mb-auto flex-md-nowrap">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/play"} className="nav-link">
                    Play
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/leaderboard"} className="nav-link" tabindex="-1" aria-disabled="true">
                    Leaderboard
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item text-nowrap">
                  <Link to={"/logout"} className="nav-link">
                    Logout
                  </Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>

      </header>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}></Route>
          <Route exact path="/play" component={Play}></Route>
          <Route exact path="/leaderboard" component={Leaderboard}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </div>
    </div>

  );
}

      export default App;
