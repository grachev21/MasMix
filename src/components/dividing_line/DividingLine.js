import icon from "../../media/icons/Mixer.png"
import "./styles.css";

const DividingLine = ({ color }) => {
  return (
    <div className={"DividingLine " + color}>
      <div className="icons">
        <div className="left-line"></div>
        <img className="icon invert-icons" src={icon} alt="" />
        <div className="right-line"></div>
      </div>
    </div>
  );
}

export default DividingLine;
