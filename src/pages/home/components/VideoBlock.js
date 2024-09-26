import "./VideoBlock.css";
import video from "../../../video/Mixing and mastering services online ｜ BROHOOD LAB.mp4";
import ReactPlayer from 'react-player/lazy'
import React from 'react'
import DividingLine from "../../../components/dividing_line/DividingLine";
import Button from "../../../components/button/Button";
import Title from "../../../components/title/Title";



function VideoBlock() {
  return (
    <div className="VideoBlock">
      <Title type={"black"} text={"MasMix - услуги по микшированию и мастерингу онлайн"} />

      <div className="description">
        Ищете услуги по микшированию и мастерингу мирового класса?
      </div>
      <DividingLine />

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
          <Button type={"green"} />
        </div>
      </div>
    </div>
  )
}

export default VideoBlock;
