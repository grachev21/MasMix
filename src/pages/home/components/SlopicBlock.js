import "./SlopicBlock.css";

import headerPhoto from "../../../media/images/HEADER-PHOTO.jpg";
import icons_list from "../../../media/icons/achievement.png";
import icons_logo from "../../../media/icons/Mixer.png";

const SlopicBlock = () => {
  return (
    <div className="slopic-block">
      <div className="slopic"></div>
      <img className="headerPhoto" src={headerPhoto} alt="" />
      <div className="info-text">
        <div className="text">
          <div className="Logo">
            <h1>Mas</h1>
            <img className="icons-logo invert-icons" src={icons_logo} alt="" />
            <h1>Mix</h1>
          </div>

          <div className="message">
            Онлайн Микширование и Мастеринг
          </div>

          <div className="list-achievements">
            <ul className="achievement">
              <img className="icons_list" src={icons_list} alt="" />
              <p>Лучшие звукорежиссеры</p>
            </ul>
            <ul className="achievement">
              <img className="icons_list" src={icons_list} alt="" />
              <p>Опыт более 10 лет</p>
            </ul>
            <ul className="achievement">
              <img className="icons_list" src={icons_list} alt="" />
              <p>Опыт работы с гос заказами</p>
            </ul>
            <ul className="achievement">
              <img className="icons_list" src={icons_list} alt="" />
              <p>Гарантия качества</p>
            </ul>
          </div>

        </div>
      </div>

    </div>

  );
}

export default SlopicBlock;



