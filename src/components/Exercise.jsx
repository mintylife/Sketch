import "./Exercise.css";
import React from "react";

import EmoticonRating from "../components/EmoticonRating";

import { BsThreeDotsVertical as InformUsIcon } from "react-icons/bs";
import { BsBookmark as BookmarkIcon } from "react-icons/bs";
import { GrNext as NextStatement } from "react-icons/gr";
import { GrPrevious as PreviousStatement } from "react-icons/gr";
import NextIcon from "../assets/icons/exercise-icons/next.png";
import BackIcon from "../assets/icons/exercise-icons/back.png";

function Exercise({ exType, exTitle, exBody }) {
  let exBodyJSX;
  if (exType === "connect-dots") {
    exBodyJSX = (
      <div className={`ex-body ${exType}`}>
        <div className="ex-left-column">
          {exBody.map((option, index) => (
            <span className="option" key={index}>
              <div className="option-text">{option[0]}</div>
              <span className="dot"></span>
            </span>
          ))}
        </div>
        <div className="ex-right-column">
          {exBody.map((option, index) => (
            <span className="option" key={index}>
              <span className="dot"></span>
              <div className="option-text">{option[1]}</div>
            </span>
          ))}
        </div>
      </div>
    );
  } else if (exType === "is-correct") {
    exBodyJSX = (
      <div className={`ex-body ${exType}`}>
        <img className="scroll-statement-button" src={BackIcon} />
        <div class="current-statement">
          <div className="statement-number">1/30</div>
          <div className="statement-text">Бiз депутатмыз</div>
          <div className="answer-button-panel">
            <div className="answer-button wrong">Неправильно</div>
            <div className="answer-button idk">Не знаю</div>
            <div className="answer-button correct">Правильно</div>
          </div>
        </div>
        <img className="scroll-statement-button" src={NextIcon} />
      </div>
    );
  } else if (exType === "choose-correct") {
    let questions = [];
    let answers = [];
    let zippedAnswers = [];
    questions = exBody.map((arr) => arr[0]);
    answers = exBody.map((arr) => arr.slice(1));
    zippedAnswers = console.log(questions);
    exBodyJSX = (
      <div className={`ex-body ${exType}`}>
        <table className="choose-correct">
          {exBody.map((line, index) => (
            <tr>
              <td>
                <div
                  className="choose-correct-line option-question"
                  key={index}
                >
                  {line[0]}
                </div>
              </td>
              {line.slice(1).map((answer, answer_index) => (
                <td>
                  <div
                    className="choose-correct-line option-answer"
                    key={answer_index}
                  >
                    {answer}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  }
  return (
    <div className={`exercise-container ${exType}`}>
      <div className="ex-header">
        <div className="ex-title-text">{exTitle}</div>
      </div>
      {exBodyJSX}
      <div className="text-footer">
        <div className="grouped-icons">
          <InformUsIcon className="inform-us-btn" />
          <BookmarkIcon />
        </div>
        <EmoticonRating />
      </div>
    </div>
  );
}

export default Exercise;
