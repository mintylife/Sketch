import React from "react";
import "./CourseInfo.css";

export const CourseInfo = () => {
  return (
    <div className="course-information">
      <div className="bulletpoints-block">
        <h4 id="foryouif-title">Этот курс для Вас, если : </h4>
        <ul className="bulletpoints-list">
          <li className="foryouif-bullet">
            почти или вообще не говорите по-казахски, хотя возможно знаете
            элементарную грамматику и имеете ограниченный словарный запас;
          </li>
          <li className="foryouif-bullet">
            боитесь делать ошибки, стесняетесь акцента и/или своего незнания
            языка;
          </li>
          <li className="foryouif-bullet">
            хотите основательно подойти к изучению и, возможно, найти пробелы в
            уже имеющихся знаниях.
          </li>
        </ul>
      </div>
      <div className="highlights-block">
        <div className="highlight" id="certificate">
          <span className="highlight-icon" id="certificate-icon" />
          <div className="highlight-text">
            <h4>Сертификат</h4>
            <p>При успешном окончании курса Вы получите сертификат</p>
          </div>
        </div>
        <div className="highlight" id="online">
          <span className="highlight-icon" id="online-icon" />
          <div className="highlight-text">
            <h4>Онлайн</h4>
            <p>Весь материал доступен онлайн</p>
          </div>
        </div>
        <div className="highlight" id="schedule">
          <span className="highlight-icon" id="schedule-icon" />
          <div className="highlight-text">
            <h4>Гибкий график</h4>
            <p>Учитесь, когда и где хотите</p>
          </div>
        </div>
        <div className="highlight" id="duration">
          <span className="highlight-icon" id="duration-icon" />
          <div className="highlight-text">
            <h4>Длительность 7-8 месяцев</h4>
            <p>При 3-4 часах обучения в неделю</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
