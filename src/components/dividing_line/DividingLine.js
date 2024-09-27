import icon from "../../media/icons/Mixer.png"
import "./styles.css";

function DividingLine({ type }) {
  return (
    <div className={"DividingLine " + type}>
      <div className="icons">
        <div className="left-line"></div>
        <img className="icon" src={icon} alt="" />
        <div className="right-line"></div>
      </div>
    </div>
  );
}

export default DividingLine;
