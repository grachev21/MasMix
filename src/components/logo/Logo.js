import styles from "./styles.module.css";
import logo from "../../media/icons/Mixer.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <div className={styles.Logo}>
        <p className={styles.text}>Mas</p>
        <img className={styles.logo + " invert-icons"} src={logo} alt="" />
        <p className={styles.text}>Mix</p>
      </div>
    </NavLink>
  );
};
export default Logo;
