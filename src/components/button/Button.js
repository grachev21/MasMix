import "./styles.css";


function Button({ type }) {
  return (
    <div className="Buttonsdf">
      <div className={"link " + type}>
        Создать заказ
      </div>
    </div>
  );
}

export default Button;
