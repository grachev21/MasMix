import "./styles.css";


const Title = ({ color, text }) => {
  return (
    <div className={"Title " + color}>
      {text}
    </div>
  );
}

export default Title;
