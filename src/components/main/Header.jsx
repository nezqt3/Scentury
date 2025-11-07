import { useState, useRef } from "react";
import LogoPart from "../../static/logo_part.svg";
import BurgerIcon from "../../static/burger.svg";
import CloseIcon from "../../static/close.svg"; // добавь любую иконку закрытия (крестик)

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navigationElements = [
    { id: 0, text: "Коллекция", target: "#collection" },
    { id: 1, text: "О нас", target: "#about" },
    { id: 2, text: "Отзывы", target: "#reviews" },
    { id: 3, text: "Контакты", target: "#contacts" },
  ];

  const handleNavigationClick = (id, target) => {
    if (isAnimating || id === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(id);

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      setIsAnimating(false);
      setMenuOpen(false); // закрываем меню после клика
    }, 300);
  };

  return (
    <header className="header">
      <div className="logo-header">
        <img src={LogoPart} alt="part-logo" />
        <p>Scentury</p>
      </div>

      {/* бургер */}
      <img
        src={BurgerIcon}
        alt="burger"
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(true)}
      />

      {/* десктопная навигация */}
      <nav className="navigation desktop-nav" ref={navRef}>
        {navigationElements.map((elem) => (
          <p
            key={elem.id}
            className={`navigation-item ${
              elem.id === currentIndex ? "active" : ""
            } ${isAnimating ? "animating" : ""}`}
            onClick={() => handleNavigationClick(elem.id, elem.target)}
          >
            <span className="nav-text">{elem.text}</span>
          </p>
        ))}
      </nav>

      {/* мобильное popup-меню */}
      <div className={`mobile-nav-overlay ${menuOpen ? "show" : ""}`}>
        <div className="mobile-nav">
          <img
            src={CloseIcon}
            alt="close"
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          />
          {navigationElements.map((elem) => (
            <p
              key={elem.id}
              className="mobile-nav-item"
              onClick={() => handleNavigationClick(elem.id, elem.target)}
            >
              {elem.text}
            </p>
          ))}
        </div>
      </div>
    </header>
  );
}
