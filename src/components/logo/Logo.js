import "./styles.css";
import logo from "../../media/icons/Mixer.png"
import { NavLink } from "react-router-dom";


const Logo = () => {
  return (
    <NavLink to="/">
    <div className="Logo">
<p>Mas</p>
      <img className="logo invert-icons" src={logo} alt="" />
        <p>Mix</p>
      </div>
    </NavLink>
  );
}

export default Logo;
