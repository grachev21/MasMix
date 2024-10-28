import Title from "../../../components/title/Title";
import DividingLine from "../../../components/dividing_line/DividingLine";
import styles from "./OurClients.module.css";

const OurClients = () => {
  return (
    <div className={styles.main_block}>
      <Title text={"Наши клиенты"} />
      <DividingLine />
      <p className={styles.information + " limiter"}>
        Мы предоставили услуги по микшированию и мастерингу в режиме онлайн большому количеству музыкантов и их лейблам. Некоторые из наших клиентов работают с этими компаниями. Вы можете быть
        уверены, что вашу музыку совершенствуют мастера.
      </p>
    </div>
  );
};

export default OurClients;
