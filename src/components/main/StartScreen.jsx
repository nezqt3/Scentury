import Header from "./Header";
import Instagram from "../../static/instagram.svg";
import Telegram from "../../static/telegram.svg";
import Mail from "../../static/email.svg";
import Xz from "../../static/xz.svg";
import { useState } from "react";
import blockRightBackground from "../../static/blockRightBackground.png";
import blockRightBackgroundAurora from "../../static/image-back.png";

export default function StartScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("up"); // "up" или "down"

  const elements = [
    { id: 1, backgroundUrl: blockRightBackground },
    { id: 2, backgroundUrl: blockRightBackgroundAurora },
    { id: 3, backgroundUrl: blockRightBackground },
    { id: 4, backgroundUrl: blockRightBackgroundAurora },
  ];

  const handleNavigationClick = (index) => {
    if (index === activeIndex || isAnimating) return;

    setIsAnimating(true);
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setDirection(index > activeIndex ? "up" : "down");

    setTimeout(() => setIsAnimating(false), 700); // совпадает с transition
  };

  return (
    <div className="start-screen" id="#collection">
      <div className="left-start-screen">
        <Header />
        <p className="found-aromat">Найти свой аромат</p>
        <h1>
          Искусство быть <br />
          редким
        </h1>
        <p className="info">
          Откройте для себя необычную подборку нишевой и авторской <br />
          парфюмерии от независимых домов
        </p>
        <div className="start-buttons">
          <button>Открыть коллекцию</button>
          <p>Узнать больше</p>
        </div>
        <img src={Xz} alt="xz" />
      </div>

      <div className="right-start-screen-container">
        <div className="right-start-screen">
          {/* Новый фон */}
          <div
            className={`background-image current ${
              isAnimating ? `slide-in-${direction}` : ""
            }`}
            style={{
              backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
            }}
          ></div>

          {/* Старый фон */}
          {isAnimating && (
            <div
              className={`background-image previous slide-out-${direction}`}
              style={{
                backgroundImage: `url(${elements[prevIndex].backgroundUrl})`,
              }}
            ></div>
          )}

          {/* Контент */}
          <div className="right-start-screen-content">
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
              {elements.map((elem, index) => (
                <p
                  key={elem.id}
                  onClick={() => handleNavigationClick(index)}
                  className={`${index === activeIndex ? "active-nav" : ""} ${
                    isAnimating ? "disabled" : ""
                  }`}
                >
                  {elem.id}
                </p>
              ))}
            </div>

            <div className="bottom-block-right-screen">
              <div>
                <button>Открыть</button>
                <button>Запах</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
