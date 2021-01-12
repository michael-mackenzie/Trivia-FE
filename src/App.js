import { Switch, Route, NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import './App.css';

import './Question.css';

import Home from "./components/home.component";
import Play from "./components/play.component";
import Leaderboard from "./components/leaderboard.component";
import Logout from "./components/logout.component";
import Footer from "./components/footer.component";

function App() {

  var location = useLocation();

  function changeBackground() {

    if(location.pathname === "/play") {
      return "cover-container h-100 d-flex flex-column play";
    } else {
      return "cover-container h-100 d-flex flex-column";
    }
  }

  return (
    <div className={changeBackground()}>
      <header className="mb-auto flex-md-nowrap">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink to={"/home"} exact activeClassName="active" className="navbar-brand" aria-current="page">
              Food Fighters GTA
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to={"/home"} exact activeClassName="active" className="nav-link" aria-current="page">
                    Home
                  </NavLink>
                </li>
                {/*<li className="nav-item">
                  <Link to={"/play"} className="nav-link">
                    Play
                  </Link>
                </li>*/}
                <li className="nav-item">
                  <NavLink to={"/leaderboard"} exact activeClassName="active" className="nav-link" tabIndex="-1" aria-disabled="true">
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item text-nowrap">
                  <NavLink to={"/logout"} exact activeClassName="active" className="nav-link">
                    Logout
                  </NavLink>
                </li>
              </ul>

            </div>
          </div>
        </nav>

      </header>
      <div className="">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}></Route>
          <Route exact path="/play" component={Play}></Route>
          <Route exact path="/leaderboard" component={Leaderboard}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </div>
      <Footer />
    </div>

  );
}

export default App;
