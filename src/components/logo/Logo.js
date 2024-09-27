import "./styles.css";
import logo from "../../media/icons/Mixer.png"
import { NavLink } from "react-router-dom";


function Logo() {
  return (
    <NavLink to="/">
      <div className="Logo">
        <p>Mas</p>
        <img src={logo} alt="" />
        <p>Mix</p>
      </div>
    </NavLink>
  );
}

export default Logo;
