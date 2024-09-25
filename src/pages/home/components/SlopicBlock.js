import "./SlopicBlock.css";

import headerPhoto from "../../../img/images/HEADER-PHOTO.jpg";
import icons_list from "../../../img/icons/achievement.png";
import icons_logo from "../../../img/icons/Mixer.png";

function SlopicBlock() {
  return (
    <div className="slopic-block">
      <img className="headerPhoto" src={headerPhoto} alt="" />
      <div className="info-text">
        <div className="text">
          <div className="Logo">
            <h1>Mas</h1>
            <img className="icons-logo" src={icons_logo} alt="" />
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



