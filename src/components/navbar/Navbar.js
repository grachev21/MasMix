import "./styles.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLink = "active-link"
  const noactiveLink = "noactive-link"
  return (
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        ДОМ
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        О НАС
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        ПРИМЕРЫ
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        ЦЕНЫ
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        УСЛУГИ
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        FAQ
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        БЛОГ
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => isActive ? activeLink : noactiveLink}>
        КОНТАКТЫ
      </NavLink>
    </nav>

  );

}

export default Navbar;
