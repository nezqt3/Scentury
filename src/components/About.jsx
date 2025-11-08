import Logo from "../static/about_brand.svg";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <img src={Logo} alt="about-brand" className="image-brand" />
        <p className="main-text">
          Мы создаём пространство для парфюмерного искусства.
          <span className="red-text"> Каждый аромат</span> в нашей коллекции —
          это <span className="red-text">результат</span> работы{" "}
          <span className="red-text">независимых парфюмеров</span>, которые
          вкладывают душу в свои творения.
        </p>
        <p className="add-text red-text">
          Редкие ингредиенты, малые партии и уникальные истории — всё это
          отличает Scentury <br />
          от масс-маркета и привычного люкса.
        </p>
      </div>
    </div>
  );
}
