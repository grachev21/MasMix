import styles from "./SlopicBlock.module.css";

import imagesSlopicBlock from "../../../media/images/HEADER-PHOTO.jpg";
import icons_list from "../../../media/icons/achievement.png";
import icons_logo from "../../../media/icons/Mixer.png";
import { useState, useEffect, useRef } from "react";

const SlopicBlock = () => {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  return (
    <div ref={myRef} className={styles.slopic_block}>
      <img className={myElementIsVisible ? styles.on : styles.off} src={imagesSlopicBlock}></img>
      <div className={styles.slopic}></div>
      <div className="filter-photo"></div>
      <div className={styles.info_text}>
        <div className={styles.text}>
          <div className={styles.Logo}>
            <h1 className={styles.logo_text}>Mus</h1>
            <img className={styles.icons_logo + " invert-icons"} src={icons_logo} alt="" />
            <h1 className={styles.logo_text}>Mix</h1>
          </div>

          <div className={styles.message}>Онлайн Микширование и Мастеринг</div>

          <div className={styles.list_achievements}>
            <ul className={styles.achievement}>
              <img className={styles.icons_list + " dont-invert-icons"} src={icons_list} alt="" />
              <p>Лучшие звукорежиссеры</p>
            </ul>
            <ul className={styles.achievement}>
              <img className={styles.icons_list + " dont-invert-icons"} src={icons_list} alt="" />
              <p>Опыт более 10 лет</p>
            </ul>
            <ul className={styles.achievement}>
              <img className={styles.icons_list + " dont-invert-icons"} src={icons_list} alt="" />
              <p>Опыт работы с гос заказами</p>
            </ul>
            <ul className={styles.achievement}>
              <img className={styles.icons_list + " dont-invert-icons"} src={icons_list} alt="" />
              <p>Гарантия качества</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlopicBlock;
