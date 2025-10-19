import { useState, useRef } from "react";
import LogoPart from "../../static/logo_part.svg";

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    }, 300);
  };

  return (
    <header className="header">
      <div className="logo-header">
        <img src={LogoPart} alt="part-logo" />
        <p>Scentury</p>
      </div>

      <nav className="navigation" ref={navRef}>
        {navigationElements.map((elem) => {
          return (
            <p
              key={elem.id}
              className={`navigation-item ${
                elem.id === currentIndex ? "active" : ""
              } ${isAnimating ? "animating" : ""}`}
              onClick={() => handleNavigationClick(elem.id, elem.target)}
            >
              <span className="nav-text">{elem.text}</span>
            </p>
          );
        })}
      </nav>
    </header>
  );
}
