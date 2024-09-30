import "./styles.css";
import back from "../../media/icons/back_3710800.png";
import { useState, useEffect } from "react";

const ButtonGreen = () => {

  //В первой переменной стартовое состояние
  // Во второй переменной функция которая меняет состояние
  const [green, setGreen] = useState('off')

  useEffect(() => {
    if (green === 'on') {
      document.querySelector('.ButtonGreen> img').classList.add('shift')
    }

    if (green === 'off') {
      document.querySelector('.ButtonGreen> img').classList.remove('shift')
    }

  }, [green])

  const onMous = () => {
    setGreen('on')
  }

  const offMous = () => {
    setGreen('off')

  }

  return (
    <div className="ButtonGreen" onMouseEnter={onMous} onMouseLeave={offMous}>
      <img src={back} />
      <p>
        Создать заказ
      </p>
    </div>
  );
}

export default ButtonGreen;
