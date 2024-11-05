import styles from "./styles.module.css";
import carouselList from "../../helpers/carouselList";
import Dot from "./Dot";
import { useState } from "react";

const Carousel = () => {
  const widthCarousel = 1080;
  const widthPicture = 360;
  const quantityPicture = Object.keys(carouselList).length;
  const numberPoints = quantityPicture - widthCarousel / widthPicture; 
  const listPoints = []
  // const [isPosition, setPosition] = useState(0);
  // const [isIndex, setIndex] = useState(0);

  // Receives data from the child
  const [isValue, setValue] = useState("");
  const handleChange = (isValue) => {
    setValue(isValue);
    console.log(isValue);
  };

  for (let index = 0; index < numberPoints; index++) {
    listPoints.push(index*widthPicture)
  }

  console.log(listPoints);

  return (
    <div className={styles.carousel} style={{ width: `${widthCarousel}px` }}>
      <div className={styles.line}>
        {carouselList.map((carouselList, index) => {
          return <img key={index} className={styles.picture} style={{ width: `${widthPicture}` }} src={carouselList.img}></img>;
        })}
      </div>
      <Dot number={numberPoints} onChange={handleChange} />
    </div>
  );
};

export default Carousel;
