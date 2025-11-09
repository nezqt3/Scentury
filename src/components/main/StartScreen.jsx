import Header from "./Header";
import Instagram from "../../static/instagram.svg";
import Telegram from "../../static/telegram.svg";
import Mail from "../../static/email.svg";
import Xz from "../../static/xz.svg";
import { useEffect, useState, useRef } from "react";
import ArrowBlack from "../../static/black_arrow.svg";
import blockRightBackground from "../../static/blockRightBackground.png";
import blockRightBackgroundAurora from "../../static/image-back.png";
import blockRightBackgroundVelour from "../../static/Velour-Noir.png";
import blockRightBackgroundSilken from "../../static/silken_muse.png";
import blockRightBackgroundEdel from "../../static/edel_roots.png";

export default function StartScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("up");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const intervalRef = useRef(null);

  const elements = [
    { id: 1, backgroundUrl: blockRightBackground },
    { id: 2, backgroundUrl: blockRightBackgroundVelour },
    { id: 3, backgroundUrl: blockRightBackgroundSilken },
    { id: 4, backgroundUrl: blockRightBackgroundAurora },
    { id: 5, backgroundUrl: blockRightBackgroundEdel },
  ];

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection("down"); // авто-слайд всегда вверх
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % elements.length);
    }, 7000);
  };

  useEffect(() => {
    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setIsAnimating(true); // включаем блокировку на время анимации
        setPrevIndex((prev) => {
          return activeIndex;
        });
        setActiveIndex((prev) => (prev + 1) % elements.length);
        setDirection("down");
      }, 7000);
    };

    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [activeIndex, elements.length]); // добавляем зависимость длины элементов

  const handleNavigationClick = (index) => {
    if (index === activeIndex || isAnimating) return;

    setDirection(index > activeIndex ? "up" : "down"); // вверх или вниз
    setPrevIndex(activeIndex);
    setActiveIndex(index);
    setIsAnimating(true);
    startInterval();
  };

  return (
    <div className="start-screen" id="collection">
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
          <button
            onClick={() => {
              const section = document.querySelector("#info-block");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Открыть коллекцию
          </button>
          <p
            onClick={() => {
              const section = document.querySelector("#about");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Узнать больше
          </p>
        </div>
        <img src={Xz} alt="xz" className="xz" />
      </div>

      <div className="right-start-screen-container">
        <div className="right-start-screen">
          {/* Новый фон */}
          <div
            key={activeIndex}
            className={`background-image current ${isAnimating ? `slide-in-${direction}` : ""}`}
            onAnimationEnd={() => setIsAnimating(false)}
            style={{
              backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
              backgroundColor: "white",
              ...(elements[activeIndex].id === 2 ||
              elements[activeIndex].id === 3 ||
              elements[activeIndex].id === 5
                ? { filter: "brightness(75%)" }
                : elements[activeIndex].id === 4
                  ? {
                      backgroundPosition: "left center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }
                  : elements[activeIndex].id === 1
                    ? { filter: "brightness(85%)" }
                    : {}),
            }}
          ></div>

          {/* Старый фон */}
          {prevIndex !== activeIndex && (
            <div
              key={prevIndex}
              className={`background-image previous ${direction}`}
              onAnimationEnd={() => setIsAnimating(false)}
              style={{
                backgroundImage: `url(${elements[prevIndex].backgroundUrl})`,
                backgroundColor: "white",
                ...(elements[prevIndex].id === 2 ||
                elements[prevIndex].id === 3 ||
                elements[prevIndex].id === 5 ||
                elements[prevIndex].id === 1
                  ? { filter: "brightness(75%)" }
                  : elements[prevIndex].id === 4
                    ? {
                        backgroundPosition: "left center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }
                    : {}),
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
              {elements.map((elem, index) => {
                const isActive = index === activeIndex;
                const activeId = elements[activeIndex].id;

                const specialIds = [2, 3, 5];

                const isHovered = index === hoveredIndex;

                let style = {};

                if (specialIds.includes(activeId)) {
                  if (isActive || isHovered) {
                    style = {
                      opacity: 1,
                      color: "rgba(0, 0, 0, 0.1)",
                      backgroundColor: "white",
                      borderColor: "white",
                      transition: "all 0.3s ease",
                    };
                  } else {
                    style = {
                      opacity: 1,
                      color: "white",
                      backgroundColor: "transparent",
                      borderColor: "white",
                      transition: "all 0.3s ease",
                    };
                  }
                }

                return (
                  <p
                    key={elem.id}
                    onClick={() => !isAnimating && handleNavigationClick(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
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
                      alt=""
                      style={{
                        backgroundImage: `url(${elements[activeIndex].backgroundUrl})`,
                      }}
                      // alt="review-bg-photo"
                    />
                  </div>
                  <div className="inner-right">
                    <p>Отзывы</p>
                    <div>
                      <img src={ArrowBlack} alt="arrow-1" />
                      <img src={ArrowBlack} alt="arrow-2" />
                      <img src={ArrowBlack} alt="arrow-3" />
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
