import trackList from "../../../helpers/trackList.js";
import "./TrackExamples.css";
import images_track_example from "../../../media/images/SAMPLES-BLOCK-BACKGROUND-2.jpg";
import DividingLine from "../../../components/dividing_line/DividingLine.js";
import Title from "../../../components/title/Title.js";
import MusicPanel from "../../../components/music_panel/MusicPanel";
import { useEffect, useState } from "react";

const TrackExamples = () => {
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setValue(value);
  };

  const handleOnClick = (ind) => {
    console.log(ind, "<<<<");
  };

  return (
    <div className="TrackExamples">
      <span>{value}</span>

      <img className="images-track-example" src={images_track_example}></img>
      <div className="filter-photo"></div>
      <Title text={"СВЕДЕНИЕ И МАСТЕРИНГ ПРИМЕРЫ"} color={"white"} />
      <DividingLine type={"invert"} />
      <div className="text limiter">
        С нами вы получите идеальный микс и мастер-запись для вашего будущего
        релиза. Мы любим доводить песни до уровня проектов из топ-чартов.
        Звучание захватит и впечатлит слушателей, став их любимой музыкой. Наше
        профессиональное сведение и мастеринг - это лучший способ для вас
        конкурировать в современной индустрии и вывести свою музыкальную карьеру
        на новый уровень. Чтобы убедиться в этом, послушайте несколько наших
        образцов "до" и "после":
      </div>

      <div className="track-list limiter">
        {trackList.map((trackList, index) => {
          return (
            <MusicPanel
              key={index}
              genre={trackList.genre}
              before={trackList.before}
              after={trackList.after}
              onChange={handleChange}
              handleClick={handleOnClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrackExamples;
