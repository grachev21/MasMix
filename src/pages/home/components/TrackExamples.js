import "./TrackExamples.css";
import images_track_example from "./../../../img/images/SAMPLES-BLOCK-BACKGROUND-2.jpg";
import DividingLine from "../../../components/dividing_line/DividingLine.js";
import Title from "../../../components/title/Title.js";

function TrackExamples() {
  return (
    <div className="TrackExamples">
      <img className="images-track-example" src={images_track_example}></img>
      <div className="limiter">
        <Title text={"СВЕДЕНИЕ И МАСТЕРИНГ ПРИМЕРЫ"} color={"white"} />
        <DividingLine type={"invert"} />
        <div className="text">
          С нами вы получите идеальный микс и мастер-запись для вашего будущего релиза. Мы любим доводить песни до уровня проектов из топ-чартов. Звучание захватит и впечатлит слушателей, став их любимой музыкой. Наше профессиональное сведение и мастеринг - это лучший способ для вас конкурировать в современной индустрии и вывести свою музыкальную карьеру на новый уровень. Чтобы убедиться в этом, послушайте несколько наших образцов "до" и "после":
        </div>
      </div>
    </div>
  );
}

export default TrackExamples;