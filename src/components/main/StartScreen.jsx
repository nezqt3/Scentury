import Header from "./Header";
import Instagram from "../../static/instagram.svg";
import Telegram from "../../static/telegram.svg";
import Mail from "../../static/email.svg";
import Xz from "../../static/xz.svg";

export default function StartScreen() {
  return (
    <div className="start-screen" id="#collection">
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

      <div
        className="right-start-screen"
        style={{
          backgroundImage: `url(${require("../../static/blockRightBackground.png")})`,
        }}
      >
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
      </div>
    </div>
  );
}
