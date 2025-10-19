import Header from "./Header";
import Instagram from "../../static/instagram.svg";
import Telegram from "../../static/telegram.svg";
import Mail from "../../static/email.svg";
import Xz from "../../static/xz.svg";
import { act, useState } from "react";
import blockRightBackground from "../../static/blockRightBackground.png";

export default function StartScreen() {
  const [activeIndex, setActiveIndex] = useState(0);

  const elements = [
    { id: 1, backgroundUrl: blockRightBackground },
    { id: 2, backgroundUrl: blockRightBackground },
    { id: 3, backgroundUrl: blockRightBackground },
    { id: 4, backgroundUrl: blockRightBackground },
  ];

  return (
    <div className="start-screen" id="#collection">
      <div className="left-start-screen">
        <Header />
        <p className="found-aromat">Найти свой аромат</p>
        <h1>
          Искусство быть <br></br>редким
        </h1>
        <p className="info">
          Откройте для себя необычную подборку нишевой и авторской <br></br>
          парфюмерии от независимых домов
        </p>
        <div className="start-buttons">
          <button>Открыть коллекцию</button>
          <p>Узнать больше</p>
        </div>
        <img src={Xz} alt="xz" />
      </div>

      <div
        className="right-start-screen"
        style={{
          backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
        }}
      >
        <div className="head-right-start-screen">
          <div className="social-media">
            <div className="instagram">
              <img src={Instagram} alt="instagram" />
            </div>
            <div className="telegram">
              <img src={Telegram} alt="telegram" />
            </div>
            <div className="mail">
              <img src={Mail} alt="mail" />
            </div>
          </div>
          <button>Позвонить</button>
        </div>
        <div className="text-front">
          <p>уникальный парфюм</p>
        </div>
        <div className="navigation-left-buttons">
          {elements.map((elem) => {
            return (
              <p
                onClick={() => setActiveIndex(elem.id - 1)}
                className={`${elem.id - 1 === activeIndex ? "active-nav" : ""}`}
              >
                {elem.id}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
