import "./Exercises.css";
import React from "react";

import Exercise from "../components/Exercise";

function Exercises() {
  return (
    <div className="main-container">
      <div className="exercise-hero-container">
        <div className="exercise-hero-text">
          <div id="topic">Сан есімнің түрлері</div>
          <div id="topic-translation">Виды имён числительных</div>
        </div>
        <span className="exercise-hero-button-panel">
          <div className="study-button">Изучить тему</div>
          <div className="see-handbook-button">Посмотреть в шпаргалку</div>
        </span>
      </div>

      <div className="exercises-container">
        <Exercise
          exType="connect-dots"
          exTitle="Соедени левую с соответсвубющей правой частью."
          exBody={[
            ["Жумыстан шыккан сон уйге барып,", "телефонын котермеуи мумкин"],
            ["Егер Айзатка конырау шалсан,", "балмуздак жеуге шыгамыз"],
            ["Уй жумысын битигрен кезде,", "жумыстан алыстап, тыныгамын"],
            ["Егер жумыс истеп бастамасан", "уйге асыгамын."],
            ["Мен демалыста болганда", "бул жерден де куылып шыгасын."],
          ]}
        />
        <Exercise
          exType="is-correct"
          exTitle="Проверь правильно ли добавлены личные окончания?"
          exBody={[]}
        />
      </div>
    </div>
  );
}

export default Exercises;
