import React from "react";
import "./Lesson.css";
import { BsThreeDotsVertical as InformUsIcon } from "react-icons/bs";
import { RiEmotionSadLine as SadFaceIcon } from "react-icons/ri";
// import { BiSad as SadFaceIcon } from "react-icons/bi";
import { MdSentimentNeutral as NeutralFaceIcon } from "react-icons/md";
import { BiHappyAlt as HappyFaceIcon } from "react-icons/bi";

function Lesson() {
  var lessonNumber = 1;
  var lessonTitle = "Порядок слов в предложении";
  return (
    <div className="lesson-container">
      <div class="lesson-header">
        <div class="lesson-title-container">
          <div className="lesson-title">Название Урока</div>
        </div>
      </div>

      <div class="lesson-body-container">
        <div className="card-container">
          <div class="card-header">
            <div className="card-title">Название карточки</div>
            <InformUsIcon className="inform-us-btn" />
          </div>
          <div className="card-content">Контент карточки</div>
          <div className="card-rating">
            <HappyFaceIcon className="rating-face" id="happy-face" />
            <NeutralFaceIcon className="rating-face" id="neutral-face" />
            <SadFaceIcon className="rating-face" id="sad-face" />
          </div>
        </div>
        <div className="lesson-nav">
          <div className="back-btn">Назад</div>
          <div className="next-btn">Вперед</div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
