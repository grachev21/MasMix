import styles from "./styles.module.css";

const Dot = ({ number, onChange }) => {
  const dots = [...Array(number).keys()];
  const handleChange = (event, getIndex) => {
    onChange((event.target.value = getIndex));
  };

  return (
    <div className={styles.Dot}>
      {dots.map((dots, index) => {
        return (
          <p
            key={index}
            onClick={(event) => {
              handleChange(event, index);
            }}
            className={styles.dot}></p>
        );
      })}
    </div>
  );
};
export default Dot;
