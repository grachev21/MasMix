import "./styles.css";


function Title({ color, text }) {
  return (
    <div className={"Title " + color}>
      {text}
    </div>
  );
}

export default Title;
