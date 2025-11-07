import Header from "./Header";
import Instagram from "../../static/instagram.svg";
import Telegram from "../../static/telegram.svg";
import Mail from "../../static/email.svg";
import Xz from "../../static/xz.svg";
import { act, useEffect, useState } from "react";
import ArrowBlack from "../../static/black_arrow.svg";
import blockRightBackground from "../../static/blockRightBackground.png";
import blockRightBackgroundAurora from "../../static/image-back.png";
import blockRightBackgroundVelour from "../../static/Velour-Noir.png";
import blockRightBackgroundSilken from "../../static/silken_muse.png";
import blockRightBackgroundEdel from "../../static/edel_roots.png";
import { color } from "framer-motion";

export default function StartScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("up"); // "up" или "down"

  const elements = [
    { id: 1, backgroundUrl: blockRightBackground },
    { id: 2, backgroundUrl: blockRightBackgroundVelour },
    { id: 3, backgroundUrl: blockRightBackgroundSilken },
    { id: 4, backgroundUrl: blockRightBackgroundAurora },
    { id: 5, backgroundUrl: blockRightBackgroundEdel },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (isAnimating) return prevIndex; // не трогаем во время анимации
        const newIndex = (prevIndex + 1) % elements.length;
        setPrevIndex(prevIndex);
        setDirection(newIndex > prevIndex ? "up" : "down");
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 1200);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval); // очистка интервала при размонтировании
  }, [elements.length, isAnimating]);

  const handleNavigationClick = (index) => {
    if (isAnimating || index === activeIndex) return;

    // Обеспечиваем цикличность индекса
    const newIndex = (index + elements.length) % elements.length;

    setIsAnimating(true);
    setPrevIndex(activeIndex);
    setActiveIndex(newIndex);
    setDirection(newIndex > activeIndex ? "up" : "down");

    setTimeout(() => setIsAnimating(false), 700);
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
        <img src={Xz} alt="xz" className="xz" />
      </div>

      <div className="right-start-screen-container">
        <div className="right-start-screen">
          {/* Новый фон */}
          <div
            className={`background-image current ${
              isAnimating ? `slide-in-${direction}` : ""
            }`}
            style={
              elements[activeIndex].id === 4
                ? {
                    backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
                    backgroundPosition: "left center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }
                : {
                    backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
                  }
            }
          ></div>

          {/* Старый фон */}
          {isAnimating && (
            <div
              className={`background-image previous slide-out-${direction}`}
              style={
                elements[prevIndex].id === 4
                  ? {
                      backgroundImage: `url(${elements[prevIndex].backgroundUrl})`,
                      backgroundPosition: "left center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }
                  : {
                      backgroundImage: `url(${elements[prevIndex].backgroundUrl})`,
                    }
              }
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
              {elements.map((elem, index) => {
                const isActive = index === activeIndex;
                const activeId = elements[activeIndex].id;

                // Проверяем, если текущий активный элемент — 2, 3 или 5
                const specialIds = [2, 3, 5];
                let style = {};

                if (specialIds.includes(activeId)) {
                  if (isActive) {
                    style = {
                      opacity: 1,
                      color: "rgb(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                      borderColor: "white",
                    };
                  } else {
                    style = {
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "white",
                    };
                  }
                }

                return (
                  <p
                    key={elem.id}
                    onClick={() => handleNavigationClick(index)}
                    style={style}
                    className={`${isActive ? "active-nav" : ""} ${isAnimating ? "disabled" : ""}`}
                  >
                    {elem.id}
                  </p>
                );
              })}
            </div>

            <div className="bottom-block-right-screen">
              <div className="buttons-bottom">
                <button className="open-bottom">Открыть</button>
                <button className="aromat-bottom">Запах</button>
              </div>
              <div
                className="nextButton-bottom"
                onClick={() => {
                  const section = document.getElementById("#reviews");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                <div className="nextButton-bottom-inner">
                  <div className="inner-left">
                    <p className="plus">+</p>
                    <img
                      style={{
                        backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
                      }}
                    />
                  </div>
                  <div className="inner-right">
                    <p>Отзывы</p>
                    <div>
                      <img src={ArrowBlack} />
                      <img src={ArrowBlack} />
                      <img src={ArrowBlack} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
