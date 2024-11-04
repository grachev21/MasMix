import styles from "./styles.module.css";
import carouselList from "../../helpers/carouselList";
import Dot from "./Dot";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.line}>
        {carouselList.map((carouselList, index) => {
          return <img key={index} className={styles.picture} src={carouselList.img}></img>;
        })}
      </div>
      <Dot number={Object.keys(carouselList).length - 3} />
    </div>
  );
};

export default Carousel;
