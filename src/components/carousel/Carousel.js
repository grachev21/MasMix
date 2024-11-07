import styles from "./styles.module.css";
import carouselList from "../../helpers/carouselList";
import Dot from "./Dot";
import { useEffect, useState } from "react";

const Carousel = () => {
  const widthCarousel = 1080;
  const widthPicture = 360;
  const quantityPicture = Object.keys(carouselList).length;
  const numberPoints = quantityPicture - widthCarousel / widthPicture + 1;
  const listPoints = [];
  const [isPosition, setPosition] = useState(0);

  // Receives data from the child
  const [isIndex, setIndex] = useState(0);
  const handleChange = (isValue) => {
    setIndex(isValue);
  };

  for (let index = 0; index < numberPoints; index++) {
    listPoints.push(index * widthPicture);
  }

  useEffect(() => {
    setPosition(listPoints[isIndex]);
  });

  return (
    <div className={styles.carousel} style={{ width: `${widthCarousel}px` }}>
      <div className={styles.line} style={{ left: `-${isPosition}px` }}>
        {carouselList.map((carouselList, index) => {
          return <img key={index} className={styles.picture} style={{ width: `${widthPicture}` }} src={carouselList.img}></img>;
        })}
      </div>
      <Dot number={numberPoints} onChange={handleChange} />
    </div>
  );
};

export default Carousel;
