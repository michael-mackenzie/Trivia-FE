import { useState, useEffect } from 'react';
import Staging from "./staging.component.js";
import UserDataService from "../services/user.service.js";

function Home() {
  const [email, setEmail] = useState('');
  const [hasEmail, setHasEmail] = useState(false);
  const [initial, setInitial] = useState(false);
  const [isNotEmail, setIsNotEmail] = useState(false);

  useEffect(() => {
    var email = localStorage.getItem('userEmail');
    if(email === 'test') {
      setHasEmail(false);
    } else {
      setHasEmail(true);
      setEmail(localStorage.getItem("userEmail"));
    }
    setInitial(true);
  }, []);

  function validateEmail (email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  function handleClick() {
    if(validateEmail(email)) {
      localStorage.setItem('userEmail', email);
      var data = {
        email: email
      }
      UserDataService
        .findOrCreateUser(data)
        .then(response => {
          console.log(response);
          setHasEmail(true);
        });
    } else {
      setIsNotEmail(true);
    }
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      {initial &&
        <>
          {hasEmail ? (
            <Staging />
          ) : (
            <div className="card col-10 col-md-8 shadow cardMain cardHomePages">
              <div className="card-body">
                <h1 className="card-title text-center">Enter Your Email Address to Play</h1>
                <h4 className="card-text text-center">If you are a Mackenzie Health Professional please use your Mackenzie Health Email Address</h4>
                <br />
                <div className="input-group mb-3 emailInput">
                  <input type="email" className="form-control emailInput" placeholder="Enter your email address" aria-label="emailaddress" onChange={handleChange} value={email}></input>
                </div>
                <br />
                {isNotEmail &&
                  <div>
                    <h4 className="card-text text-center">Please Enter an Email Address!</h4>
                    <br />
                  </div>
                }
                <div className="d-grid gap-2 col-4 mx-auto">
                  <button className="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>
                </div>
              </div>
            </div>
          )}
        </>
      }
    </>
  )
}

export default Home;
