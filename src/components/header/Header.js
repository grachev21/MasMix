import "./styles.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import SwitchTheme from "../switch_theme/SwitchTheme";
// import { FaVk, FaMixer } from 'react-icons/fa';

function Header() {
    return (
        <div className="Header-block">
            <div className="Header">
                <Logo />
                <Navbar />
                <SwitchTheme />
            </div>

        </div>
    );
    
}

export default Header;