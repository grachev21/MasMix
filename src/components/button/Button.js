import "./styles.css";


function Button({ type }) {
  return (
    <div calssName="Button">
      <div className={"link " + type}>
        Создать заказ
      </div>
    </div >
  )
}

export default Button;
