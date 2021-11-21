import "./Landing.css";
import React from "react";

import grammarBookIcon from "../assets/icons/mainpage-icons/grammarBook.png";
import practiceIcon from "../assets/icons/mainpage-icons/practice.png";
import qaIcon from "../assets/icons/mainpage-icons/qa.png";
import vocabIcon from "../assets/icons/mainpage-icons/vocabulary.png";
import coursesIcon from "../assets/icons/mainpage-icons/courses.png";
import loginIcon from "../assets/icons/mainpage-icons/login.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-hero">
        <div className="landing-subtitle">Образовательная платформа</div>
        <div className="landing-title">
          Твой главный помощник в изучении казахского.
        </div>
        <div className="auth-panel">
          <div className="login-text">Вход</div>
          <img className="login-icon" src={loginIcon} />
        </div>
      </div>
      <div className="landing-main-section">
        <div className="services-panel">
          <div className="service" id="grammar-book">
            <img className="service-icon" src={grammarBookIcon} />
            <div className="service-text">
              Грамматический справочник-шпаргалка
            </div>
          </div>
          <div className="service" id="practice-material">
            <img className="service-icon" src={practiceIcon} />
            <div className="service-text">Практические материалы</div>
          </div>
          <div className="service" id="vocab-collections">
            <img className="service-icon" id="vocab-icon" src={vocabIcon} />
            <div className="service-text">Коллекции слов</div>
          </div>
          <div className="service" id="our-courses">
            <img className="service-icon" id="courses-icon" src={coursesIcon} />
            <div className="service-text">Курсы</div>
          </div>
          <div className="service" id="question-answer">
            <img className="service-icon" id="qa-icon" src={qaIcon} />
            <div className="service-text">Вопросы & Ответы</div>
          </div>
        </div>
        <div className="about-us">О нас</div>
      </div>
    </div>
  );
}

export default Landing;
