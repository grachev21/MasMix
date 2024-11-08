import { useRef, useEffect, useState } from "react";
import icon from "../../media/icons/Mixer.png";
import styles from "./styles.module.css";

const DividingLine = () => {
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
    <div ref={myRef} className={styles.icons}>
      <div className={myElementIsVisible ? styles.line_long : styles.line_short}></div>
      <img className={styles.icon + " invert-icons"} src={icon} alt="" />
      <div className={myElementIsVisible ? styles.line_long : styles.line_short}></div>
    </div>
  );
};
export default DividingLine;
