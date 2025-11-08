import { useState, useEffect } from "react";
import Arrow from "../static/arrow.svg";
import Aurora from "../static/image-back.png";
import Velour from "../static/Velour-Noir.png";
import Silken from "../static/silken_muse.png";
import Edel from "../static/edel_roots.png";

const slides = [
  {
    id: 1,
    title: "Aurora Essence",
    description: "Сияние цитрусов и белых цветов. Аромат свежести и свободы.",
    bg: Aurora,
    buttonColor: "rgba(160, 36, 36, 1)",
    textColor: "white",
  },
  {
    id: 2,
    title: "Velour Noir",
    description: "Пряный шлейф кожи и специй. Смелый и дерзкий характер.",
    bg: Velour,
    buttonColor: "rgba(160, 36, 36, 1)",
    textColor: "white",
  },
  {
    id: 3,
    title: "Silken Muse",
    description: "Нежное переплетение пудры и ириса.",
    bg: Silken,
    buttonColor: "white",
    textColor: "black",
  },
  {
    id: 4,
    title: "Edel Roots",
    description:
      "Древесная глубина с землистыми аккордами. Для тех, кто ценит силу природы.",
    bg: Edel,
    buttonColor: "white",
    textColor: "black",
  },
];

export default function InfoBlock() {
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.bg;
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="block-with-all-info" id="info-block">
      {/* Слайдер */}
      <div className="slider">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`slider-block ${i === activeIndex ? "active" : ""} ${s.title === "Velour Noir" ? "velour" : s.title === "Edel Roots" ? "edel-roots" : ""}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          >
            {i === activeIndex && (
              <div
                className={"block-with-info"}
                style={{
                  color:
                    s.title === "Edel Roots" || s.title === "Silken Muse"
                      ? "white"
                      : s.title === "Aurora Essence"
                        ? "rgba(160, 36, 36, 1)"
                        : s.textColor,
                }}
              >
                <p className="up-info">{s.description}</p>
                <h2 className="title">{s.title}</h2>
                <button
                  onClick={() => {
                    const section = document.getElementById("#choose");
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  style={{
                    backgroundColor: s.buttonColor,
                    color: s.textColor,
                  }}
                >
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="buttons">
          <button className="left-button" onClick={handlePrev}>
            <img src={Arrow} alt="arrow-left" />
          </button>
          <button className="right-button" onClick={handleNext}>
            <img src={Arrow} alt="arrow-right" />
          </button>
        </div>
      </div>

      {/* Middle блоки */}
      <div className="middle-block">
        <div
          className="middle-block-container velour"
          style={{
            backgroundImage: `url(${Velour})`,
          }}
        >
          <div className="block-with-info-middle">
            <p className="up-info red-text">
              Пряный шлейф кожи и специй. Смелый и дерзкий характер.
            </p>
            <h2 className="title red-text">Velour Noir</h2>
            <button
              onClick={() => {
                const section = document.getElementById("#choose");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Оформить заказ
            </button>
          </div>
        </div>

        <div
          className="middle-block-container silken"
          style={{ backgroundImage: `url(${Silken})` }}
        >
          <div className="block-with-info-middle">
            <p className="up-info">Нежное переплетение пудры и ириса.</p>
            <h2 className="title">Silken Muse</h2>
            <button
              onClick={() => {
                const section = document.getElementById("#choose");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>

      {/* Bottom блок */}
      <div
        className="bottom-block-container"
        style={{ backgroundImage: `url(${Edel})` }}
      >
        <div className="edel">
          <p className="up-info">
            Древесная глубина с землистыми аккордами. Для тех, кто ценит силу
            природы.
          </p>
          <h2 className="title">Edel Roots</h2>
          <button
            onClick={() => {
              const section = document.getElementById("#choose");
              if (section) {
                section.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
}
