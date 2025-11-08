import { useState, useRef, useEffect } from "react";
import LogoPart from "../../static/logo_part.svg";
import BurgerIcon from "../../static/burger.svg";
import Instagram from "../../static/instagram.svg";
import Telegram from "../../static/telegram.svg";
import Mail from "../../static/email.svg";
import CloseIcon from "../../static/close.svg";

const navigationElements = [
  { id: 0, text: "Коллекция", target: "collection" },
  { id: 1, text: "О нас", target: "about" },
  { id: 2, text: "Отзывы", target: "reviews" },
  { id: 3, text: "Контакты", target: "contacts" },
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = navigationElements.findIndex(
              (el) => el.target === entry.target.id, // без #
            );
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    // Наблюдаем за всеми секциями
    navigationElements.forEach((elem) => {
      const section = document.getElementById(elem.target);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navigationElements.forEach((elem) => {
        const section = document.getElementById(elem.target);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

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
          <div className="menu-burger">
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
        </div>
      </div>
    </header>
  );
}
