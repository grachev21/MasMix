import "./styles.css";

import headerPhoto from "./img/HEADER-PHOTO.jpg";
import icons_logo from "../../img/icons/Mixer.png";
import icons_list from "../../img/icons/achievement.png";

function Home() {
    return (
        <div className="Home">
            <div className="slopic-block">
                <img className="headerPhoto" src={headerPhoto} alt="" />
                <div className="info-text">
                    <div className="text">
                        <div className="Logo">
                            <h1>Mas</h1>
                            <img className="icons-logo" src={icons_logo} alt="" />
                            <h1>Mix</h1>
                        </div>

                        <div className="message">
                            Онлайн Микширование и Мастеринг
                        </div>

                        <div className="list-achievements">
                            <ul className="achievement">
                                <img className="icons_list" src={icons_list} alt="" />
                                <p>Лучшие звукорежиссеры</p>
                            </ul>
                            <ul className="achievement">
                                <img className="icons_list" src={icons_list} alt="" />
                                <p>Лучшие звукорежиссеры</p>
                            </ul>
                            <ul className="achievement">
                                <img className="icons_list" src={icons_list} alt="" />
                                <p>Лучшие звукорежиссеры</p>
                            </ul>
                            <ul className="achievement">
                                <img className="icons_list" src={icons_list} alt="" />
                                <p>Лучшие звукорежиссеры</p>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;