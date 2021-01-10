import { useHistory } from 'react-router-dom';

function Notfullplays(props) {

  const history = useHistory();

  const toLeaderboard = () => {
    var path = `/leaderboard`;
    history.push(path);
  }

  const toPlay = () => {
    var path = `/play`;
    history.push(path);
  }

  return(
    <div className="card col-md-8 col-10 shadow CardMain cardHomePages">

      <div className="card-body">
        <h1 className="text-center">Your Score Today is {props.totalScore}</h1>
        <h4 className="text-center">You have {props.playsLeft} plays left today</h4>
        <br />
        <div className="d-grid gap-2 col-8 mx-auto">
          <button className="btn btn-primary" type="button" disabled={props.canPlay} onClick={toPlay}>Play</button>
          <button className="btn btn-primary" type="button" onClick={toLeaderboard}>Leaderboard</button>
        </div>
      </div>
    </div>
  )
}

export default Notfullplays;
