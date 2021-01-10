import { useState, useEffect } from 'react';
import UserDataService from "../services/user.service.js";
import Fullplays from "./fullplays.component.js";
import Notfullplays from "./notfullplays.component.js";

function Staging() {
  const [playsLeft, setPlaysLeft] = useState(null);
  const [totalScore, setTotalScore] = useState(null);
  const [canPlay, setCanPlay] = useState('');

  var email = localStorage.getItem("userEmail");

  useEffect(() => {
    UserDataService
      .findAllDailyUserAttempts({email: email})
      .then(response => {
        setPlaysLeft(5 - response.data.todaysAttempts);
        setTotalScore(response.data.todaysScore);
      });

  }, [email, playsLeft]);

  useEffect(() => {
    if(playsLeft <= 0 && playsLeft !== null) {
      setCanPlay('test');
    }
  }, [playsLeft]);

  return (
    <>
      {(totalScore !== null) && (playsLeft !== null) &&
        <>
          {playsLeft === 5 ? (
            <Fullplays
              playsLeft={playsLeft}
            />
          ) : (
            <Notfullplays
              playsLeft={playsLeft}
              totalScore={totalScore}
              canPlay={canPlay}
            />
          )}
        </>}
    </>
  )
}

export default Staging;
