import NotPoints from "../../static/not_point.svg";

export default function Review({
  index,
  activeIndex,
  reviewText,
  name,
  city,
  zIndex,
  flyingRight,
  flyingLeft,
  goNext,
}) {
  return (
    <div
      onClick={goNext}
      className={`review 
            ${index === activeIndex ? "active" : ""}
            ${
              index % 2 === 0 && index !== activeIndex
                ? "right"
                : index % 2 !== 0 && index !== activeIndex
                  ? "left"
                  : ""
            }
            ${flyingRight ? "fly-right" : ""}
            ${flyingLeft ? "fly-left" : ""}`}
      style={{ zIndex }}
    >
      <div className="points">
        <img src={NotPoints} alt="1" />
        <img src={NotPoints} alt="2" />
      </div>
      <p className="review-text">{reviewText}</p>
      <p className="bottom-information">
        {name}, {city}
      </p>
      <div className="all-indicator">
        <div
          className={`move-indicator ${index === activeIndex ? "active-indicator" : ""}`}
        ></div>
      </div>
    </div>
  );
}
