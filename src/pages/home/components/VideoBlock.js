import "./VideoBlock.css";
import icon_video from "../../../img/icons/Mixer.png";
import video from "../../../video/Mixing and mastering services online ｜ BROHOOD LAB.mp4";
import play from "../../../img/icons/play_15775957.png";
import ReactPlayer from 'react-player/lazy'
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";



function VideoBlock() {
  return (
    <div className="VideoBlock">
      <div className="title">
        MasMix - услуги по микшированию и мастерингу онлайн
      </div>
      <div className="description">
        Ищете услуги по микшированию и мастерингу мирового класса?
      </div>
      <div className="icons">
        <img className="icons_video" src={icon_video} alt="" />
      </div>
      <div className="block-video">
        <div className="video">
          <ReactPlayer
            url={video}
            controls
            width={500}
            height={300}
          />
        </div>
        <div className="info">
          <div className="text">
            Mas Mix- профессиональная студия микширования и мастеринга, имеющая в своем штате опытных инженеров и соответствующее оборудование.
            Мы окажем вам всю необходимую помощь, чтобы ваша песня или альбом звучали идеально.
          </div>
          <div className="link">
            <FaChevronLeft />
            Создать заказ
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoBlock;
