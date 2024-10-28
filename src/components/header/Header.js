import styles from "./styles.module.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import SwitchTheme from "../switch_theme/SwitchTheme";

const Header = () => {
  return (
    <div className={styles.HeaderBlock}>
      <div className={styles.Header + " limiter"}>
        <Logo />
        <Navbar />
        <SwitchTheme />
      </div>
    </div>
  );
};

export default Header;
