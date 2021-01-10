import { useHistory } from 'react-router-dom';

function Fullplays(props) {

  const history = useHistory();

  const toPlay = () => {
    var path = `/play`;
    history.push(path);
  }

  return(
    <div className="card col-md-8 col-10shadow cardMain cardHomePages">

      <div className="card-body">
        <h1 className="card-title text-center">Start New Game</h1>
        <h4 className="card-text text-center">You have {props.playsLeft} plays left today</h4>

        <br />
        <div className="d-grid gap-2 col-8 mx-auto">
          <button className="btn btn-primary" type="button" onClick={toPlay}>Play</button>
        </div>
      </div>
    </div>
  )
}

export default Fullplays;
