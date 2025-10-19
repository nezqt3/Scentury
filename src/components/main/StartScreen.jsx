import Header from "./Header";
import Xz from "../../static/xz.svg";

export default function StartScreen() {
  return (
    <div className="start-screen">
      <div className="left-start-screen">
        <Header />
        <p className="found-aromat">Найти свой аромат</p>
        <h1>
          Искусство быть <br></br>редким
        </h1>
        <p className="info">
          Откройте для себя необычную подборку нишевой и авторской <br></br>
          парфюмерии от независимых домов
        </p>
        <div className="start-buttons">
          <button>Открыть коллекцию</button>
          <p>Узнать больше</p>
        </div>
        <img src={Xz} alt="xz" />
      </div>
    </div>
  );
}
