import Review from "./Review";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goNext = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <div className="reviews-block">
      <h2>
        Ароматы глазами<br></br> клиентов
      </h2>
      <div className="review-slider">
        {reviews.map((review, index) => {
          const flyingRight = index === prevIndex && prevIndex % 2 === 0;
          const flyingLeft = index === prevIndex && prevIndex % 2 !== 0;
          const zIndex =
            index === activeIndex ? 10 : 10 - Math.abs(index - activeIndex);

          return (
            <Review
              index={index}
              goNext={goNext}
              activeIndex={activeIndex}
              reviewText={review.reviewText}
              name={review.name}
              city={review.city}
              zIndex={zIndex}
              flyingRight={flyingRight}
              flyingLeft={flyingLeft}
            />
          );
        })}
      </div>
      <div className="behind-block">
        <div className="movement-block">
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
        </div>
        <div className="movement-block">
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
          <p>Scentury</p>
        </div>
      </div>
    </div>
  );
}
