import "./EmoticonRating.css";
import { RiEmotionSadLine as SadFaceIcon } from "react-icons/ri";
// import { BiSad as SadFaceIcon } from "react-icons/bi";
import { MdSentimentNeutral as NeutralFaceIcon } from "react-icons/md";
import { BiHappyAlt as HappyFaceIcon } from "react-icons/bi";

function EmoticonRating() {
  var lessonNumber = 1;
  var lessonTitle = "Порядок слов в предложении";
  return (
    <div className="rating">
      <HappyFaceIcon className="rating-face" id="happy-face" />
      <NeutralFaceIcon className="rating-face" id="neutral-face" />
      <SadFaceIcon className="rating-face" id="sad-face" />
    </div>
  );
}

export default EmoticonRating;
