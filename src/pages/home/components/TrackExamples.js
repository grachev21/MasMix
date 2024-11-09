import { useState, useEffect, useRef } from "react";
import trackList from "../../../helpers/trackList.js";
import styles from "./TrackExamples.module.css";
import imagesTrackExample from "../../../media/images/SAMPLES-BLOCK-BACKGROUND-2.jpg";
import DividingLine from "../../../components/dividing_line/DividingLine.js";
import Title from "../../../components/title/Title.js";
import MusicPanel from "../../../components/music_panel/MusicPanel";

const TrackExamples = () => {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  console.log(myElementIsVisible);
  return (
    <div ref={myRef} className={styles.track_examples}>
      <img className={myElementIsVisible ? styles.on: styles.off} src={imagesTrackExample}></img>
      <div className="filter-photo"></div>
      <Title text={"СВЕДЕНИЕ И МАСТЕРИНГ ПРИМЕРЫ"} color={"white"} />
      <DividingLine type={"invert"} />
      <div className={styles.text + " limiter"}>
        С нами вы получите идеальный микс и мастер-запись для вашего будущего релиза. Мы любим доводить песни до уровня проектов из топ-чартов. Звучание захватит и впечатлит слушателей, став их
        любимой музыкой. Наше профессиональное сведение и мастеринг - это лучший способ для вас конкурировать в современной индустрии и вывести свою музыкальную карьеру на новый уровень. Чтобы
        убедиться в этом, послушайте несколько наших образцов "до" и "после":
      </div>

      <div className={styles.track_list + " limiter"}>
        {trackList.map((trackList, index) => {
          return <MusicPanel key={index} genre={trackList.genre} before={trackList.before} after={trackList.after} onChange={handleChange} getIndex={index} value={value} />;
        })}
      </div>
    </div>
  );
};

export default TrackExamples;
