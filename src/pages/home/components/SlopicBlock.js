import styles from "./SlopicBlock.module.css";

import headerPhoto from "../../../media/images/HEADER-PHOTO.jpg";
import icons_list from "../../../media/icons/achievement.png";
import icons_logo from "../../../media/icons/Mixer.png";

const SlopicBlock = () => {
  return (
    <div className={styles.slopic_block}>
      <div className={styles.slopic}></div>
      <img className={styles.header_photo} src={headerPhoto} alt="" />
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
              <img
                className={styles.icons_list + " dont-invert-icons"}
                src={icons_list}
                alt=""
              />
              <p>Лучшие звукорежиссеры</p>
            </ul>
            <ul className={styles.achievement}>
              <img
                className={styles.icons_list + " dont-invert-icons"}
                src={icons_list}
                alt=""
              />
              <p>Опыт более 10 лет</p>
            </ul>
            <ul className={styles.achievement}>
              <img
                className={styles.icons_list + " dont-invert-icons"}
                src={icons_list}
                alt=""
              />
              <p>Опыт работы с гос заказами</p>
            </ul>
            <ul className={styles.achievement}>
              <img
                className={styles.icons_list + " dont-invert-icons"}
                src={icons_list}
                alt=""
              />
              <p>Гарантия качества</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlopicBlock;
