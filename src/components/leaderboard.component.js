import { useState, useEffect } from "react";
import UserDataService from "../services/user.service.js"; //findUserLeaderboard

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState();
  const [position, setPosition] = useState();
  const [email, setEmail] = useState();
  const [score, setScore] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setEmail(localStorage.getItem('userEmail'));
    if(email === "test" || !email) {
      setShow(false);
    } else {
      setShow(true);
    }
    UserDataService
      .findUserLeaderboard()
      .then(data => {
        var fullLeaderboard = data.data;
        var condition = "email";
        var rank = findWithAttr(fullLeaderboard, condition, email)
        setPosition(rank + 1);
        if(rank !== -1){
          setScore(data.data[rank].todaysScore);
        }
        setLeaderboard(fullLeaderboard.slice(0, 10));
      });
  }, [email, score]);

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
  }

  return (
    <>
      {leaderboard && //position && score &&
        <div>
          <div className="card col-md-8 offset-md-2 col-sm-10 offset-sm-2 col-10 offset-sm-2 shadow cardTitle">
            <div className="card-body">
              <h1 className="text-center">Today's Leaderboard</h1>
              {show && <h4 className="text-center">You are Currently #{position} with {score} Points</h4> }
            </div>
          </div>

          <div className="card col-md-8 offset-md-2 col-sm-10 offset-sm-2 col-10 offset-sm-2 shadow leaderboard cardMain">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nickname</th>
                  <th scope="col">Points</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((usr, index)=> {
                  return(
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{usr.nickname}</td>
                      <td>{usr.todaysScore}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      }
    </>
  )
}

export default Leaderboard;
