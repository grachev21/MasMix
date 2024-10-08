import "./styles.css";


const ButtonPlayStop = ({ type }) => {
  return (
    <div className="ButtonPlayStop">
      <div className={"control-item " + type}></div>
    </div>
  );
}

export default ButtonPlayStop;
