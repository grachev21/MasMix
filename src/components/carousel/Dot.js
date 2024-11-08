import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Dot = ({ number, onChange }) => {
  const [isDot, setDot] = useState(0);
  const dots = [...Array(number).keys()];
  const handleChange = (event, getIndex) => {
    onChange((event.target.value = getIndex));
  };

  useEffect(() => {
    const dots = [...document.querySelectorAll("." + styles.dot)];
    dots.map((dots, index) => {
      index === isDot ? dots.setAttribute("style", "background-color: var(--button-color-1)") : dots.removeAttribute("style");
    });
  });

  return (
    <div className={styles.Dot}>
      {dots.map((dots, index) => {
        return (
          <p
            key={index}
            onClick={(event) => {
              handleChange(event, index);
              setDot(index);
            }}
            className={styles.dot}
            style={{ background: "var()" }}></p>
        );
      })}
    </div>
  );
};
export default Dot;
