import useSound from "use-sound"; //для работы со звуком
import { useState } from "react";
import qala from "../../media/audio/09. First Transformation.mp3"
import "./styles.css";
import play from "../../media/icons/play_16786783.png";


const MusicPanel = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(qala);


  const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };




  return (
    <div className="MusicPanel">
      <div className="top-block">
        <div className="name">rock</div>
        <div className="progress-bpar"></div>
      </div>
      <div className="bottom-block">
        <img className="icon-play" src={play} />
        <div className="before-after">
          <p className="before">before</p>
          <p className="after">after</p>
        </div>
      </div>



      <div className="component">
        <h2>Playing Now</h2>
        <img
          className="musicCover"
          src="https://picsum.photos/200/200"
        />
        <div>
          <h3 className="title">Rubaiyyan</h3>
          <p className="subTitle">Qala</p>
        </div>
        <div>

          <button className="playButton">
            Play
          </button>

          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              Play
            </button>

          ) : (
            <button className="playButton" onClick={playingButton}>
              Play
            </button>
          )}
          <button className="playButton">
            Play
          </button>
        </div>
      </div>
      );
    </div>
  );
}

export default MusicPanel;
