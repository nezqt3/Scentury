import Review from "./Review";
import { useEffect, useState, useCallback } from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 0,
      reviewText:
        "Scentury открыл для меня мир редких ароматов, которые невозможно найти в обычных магазинах. Каждая композиция — маленькое произведение искусства.",
      name: "Анна",
      city: "Москва",
    },
    {
      id: 1,
      reviewText:
        "Я никогда не думала, что парфюм может быть таким персональным. Scentury создаёт впечатления, которые остаются с тобой навсегда.",
      name: "Ирина",
      city: "Санкт-Петербург",
    },
    {
      id: 2,
      reviewText:
        "Каждый аромат здесь уникален. Scentury делает процесс выбора парфюма настоящим удовольствием и маленьким приключением.",
      name: "Мария",
      city: "Казань",
    },
    {
      id: 3,
      reviewText:
        "Сервис и внимание к деталям на высоте. Ароматы Scentury вдохновляют и поднимают настроение каждый день.",
      name: "Екатерина",
      city: "Новосибирск",
    },
    {
      id: 4,
      reviewText:
        "Теперь я понимаю, что значит «аромат, созданный для тебя». Каждое сочетание запахов будто рассказывает историю.",
      name: "Ольга",
      city: "Екатеринбург",
    },
    {
      id: 5,
      reviewText:
        "Scentury изменил моё представление о парфюмерии. Здесь каждый аромат — это маленький шедевр, который хочется носить снова и снова.",
      name: "Татьяна",
      city: "Ростов-на-Дону",
    },
  ];

  const [prevIndex, setPrevIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const goNext = useCallback(() => {
    setPrevIndex(activeIndex);
    const newIndex = (activeIndex + 1) % reviews.length;
    setDirection("right");
    setActiveIndex(newIndex);

    setTimeout(() => setPrevIndex(null), 800);
  }, [activeIndex, reviews.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <div className="reviews-block" id="reviews">
      <h2>
        Ароматы глазами<br></br> клиентов
      </h2>
      <div className="review-slider" onClick={goNext}>
        {reviews.map((review, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex;

          const flyingOut =
            isPrev && direction === "right"
              ? "slide-out-right"
              : isPrev && direction === "left"
                ? "slide-out-left"
                : "";

          const flyingIn =
            isActive && direction === "right"
              ? "slide-in-right"
              : isActive && direction === "left"
                ? "slide-in-left"
                : "";

          const zIndex = isActive ? 10 : isPrev ? 9 : 1;

          return (
            <Review
              key={review.id}
              index={index}
              activeIndex={activeIndex}
              reviewText={review.reviewText}
              name={review.name}
              city={review.city}
              zIndex={zIndex}
              extraClass={`${flyingOut} ${flyingIn}`}
            />
          );
        })}
      </div>
      <div className="behind-block">
        <div className="movement-block">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>Scentury</p>
          ))}
        </div>
        <div className="movement-block">
          {Array.from({ length: 10 }).map((_, i) => (
            <p key={i}>Scentury</p>
          ))}
        </div>
      </div>
    </div>
  );
}
