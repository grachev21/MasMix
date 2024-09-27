import "./styles.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import SwitchTheme from "../switch_theme/SwitchTheme";

const Header = () => {
  return (
    <div className="Header-block">
      <div className="Header limiter">
        <Logo />
        <Navbar />
        <SwitchTheme />
      </div>

    </div>
  );

}

export default Header;
