import { useState, useEffect } from "react";
import QuestionDataService from "../services/question.service.js";
import { useHistory } from 'react-router-dom';
import UserDataService from "../services/user.service.js";

function Play() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(); //[{text: "test"}]
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [answerValue, setAnswerValue] = useState('');
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [clicked, setClicked] = useState(-1);
  //const [numOfQuestionsAnswered, setNumOfQuestionsAnswered] = useState(0);

  const history = useHistory();

  useEffect(() => {
    QuestionDataService
      .getQuestions()
      .then(response => {
        setQuestions(response.data);
        setEmail(localStorage.getItem('userEmail'));
      });
  }, []);

  const handleAnswerOptionClick = (isCorrect, index) => {
    //setNumOfQuestionsAnswered(numOfQuestionsAnswered + 1);

    if(isCorrect) {
      setScore(score + 1);
    }

    setClicked(index);
    setAnswerValue('disabled');
    setTimeout(function () {
      setShowAllAnswers(true);
      setClicked(-1);
    }, 1000)
  }

  const handleNextClick = () => {
      setShowAllAnswers(false);
      const nextQuestion = currentQuestion + 1;
      setAnswerValue('');

      setCurrentQuestion(nextQuestion);
      if(nextQuestion >= questions.length) {
        setShowScore(true);
      }

  }

  const handleEndGame = () => {
    var data1 = {
      score: score,
      numOfQs: questions.length,
      email: email
    }

    UserDataService
      .createAttempt(data1)
      .then(response => {
        console.log(response.data);
      });

    var data2 = {
      email: email,
      nickname: nickname
    }

    UserDataService
      .updateUserNickname(data2)
      .then(response => {
        console.log(response.data);
      });

    var path = `/home`;
    history.push(path);

  }

  const handleChange = (e) => {
    setNickname(e.target.value);
  }

  const takeToLearnMore = (e) => {
    e.preventDefault();
    var newPageUrl = questions[currentQuestion].learnMore;
    window.open(newPageUrl, "_blank");
  }

  const getAnswerClassName = (isCorrect, index) => {
    if(clicked === index) {
      if(isCorrect) {
        console.log("btn btn-lg questionAnswer answerRight");
        return "btn btn-lg questionAnswer answerRight";
      } else {
        console.log("btn btn-lg questionAnswer answerWrong");
        return "btn btn-lg questionAnswer answerWrong";
      }
    } else {
      if(showAllAnswers) {
        if(isCorrect) {
          console.log("btn btn-lg questionAnswer answersRevealedRight");
          return "btn btn-lg questionAnswer answersRevealedRight";
        } else {
          console.log("btn btn-lg questionAnswer answersRevealedWrong");
          return "btn btn-lg questionAnswer answersRevealedWrong";
        }
      } else {
        console.log("btn btn-lg questionAnswer");
        return "btn btn-lg questionAnswer";
      }
    }
  }

  return (
    //render questions by incrementing counter through array per button click
    //conditionally render q, or if counter>length, the score page
    <>
      {showScore ? (
        <div className="card col-md-8 col-10shadow cardMain cardHomePages">

          <div className="card-body">
            <h2 className="text-center">You Scored {score} Points</h2>
            <h1 className="text-center">You Are Now On the Leaderboard</h1>
            <h4 className="text-center">Please enter a nickname to be shown on the leaderboard with your score</h4>
            <br />
            <div className="input-group mb-3 emailInput">
              <input type="text" className="form-control emailInput" placeholder="Enter nickname" aria-label="emailaddress" onChange={handleChange} value={nickname}></input>
            </div>
            <br />
            <div className="d-grid gap-2 col-4 mx-auto">
              <button className="btn btn-primary" type="button" onClick={handleEndGame}>Submit</button>
            </div>
          </div>
        </div>
      ) : (
        questions &&
        (<div className="">
          <div className="card col-md-8 col-10 shadow cardTitle questionTitle">
            <div className="card-body">
              <h3>Question {currentQuestion + 1}</h3>
              <h2>{questions[currentQuestion].text}</h2>
            </div>
          </div>
          <div className="card col-md-8 col-10 shadow cardMain">
            <div className="d-grid gap-2 col-12 mx-auto">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button id={index} className={getAnswerClassName(answer.isCorrect, index)}
                  type="button" key={index} disabled={answerValue} onClick={() => handleAnswerOptionClick(answer.isCorrect, index)}>
                  {clicked === index ? (answer.isCorrect ? "That's Right" : "Good Try!") : answer.text}
                </button>
              ))}
            </div>

            {showAllAnswers && (
              <div className="d-grid gap-2 mx-auto d-md-flex justify-content-md-end mt-4">
                <button className="btn btn-primary" type="button" onClick={handleNextClick}>Next</button>
                <button className="btn btn-primary" type="button" onClick={takeToLearnMore}>Learn More</button>
              </div>
            )}
          </div>
        </div>)
      )}
    </>
    )
}

export default Play;
