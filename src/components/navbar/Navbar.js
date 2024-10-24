import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        ДОМ
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        О НАС
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        ПРИМЕРЫ
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        ЦЕНЫ
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        УСЛУГИ
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        FAQ
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        БЛОГ
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) => (isActive ? styles.active_link: styles.noactive_link)}
      >
        КОНТАКТЫ
      </NavLink>
    </nav>
  );
};

export default Navbar;
