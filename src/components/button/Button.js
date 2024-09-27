import "./styles.css";


const Button = ({ type }) => {
  return (
    <div className="Buttonsdf">
      <div className={"link " + type}>
        Создать заказ
      </div>
    </div>
  );
}

export default Button;
