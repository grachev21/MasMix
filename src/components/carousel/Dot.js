import { useEffect } from "react";
import styles from "./styles.module.css";
import carouselList from "../../helpers/carouselList";

const Dot = ({ number }) => {

  useEffect(() => {
    const size_picture = document.querySelector("." + styles.picture).offsetWidth;
    const size_line = document.querySelector("." + styles.carousel).offsetWidth;
    console.log(size_line, size_picture);
    console.log(Object.keys(carouselList).length);
  });

  let dots = [];
  for (let i = 1; i <= number; i++) {
    dots.push(i);
  }

  const DotClick = (index) => {
    console.log();
  };

  return (
    <div className={styles.Dot}>
      {dots.map((dots, index) => {
        return (
          <p
            key={index}
            onClick={() => {
              DotClick(index);
            }}
            className={styles.dot}></p>
        );
      })}
    </div>
  );
};

export default Dot;
