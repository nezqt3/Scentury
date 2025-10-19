import Arrow from "../static/arrow.svg";

export default function InfoBlock() {
  return (
    <div className="block-with-all-info">
      <div className="slider">
        <div
          className="slider-block"
          style={{
            backgroundImage: `url(${require("../static/image-back.png")})`,
          }}
        >
          <div className="block-with-info">
            <p className="up-info red-text">
              Сияние цитрусов и белых цветов. Аромат свежести и свободы.
            </p>
            <h2 className="title red-text">Aurora Essence</h2>
            <button onClick={async () => {}}>Оформить заказ</button>
          </div>
          <div className="buttons">
            <button className="left-button">
              <img src={Arrow} alt="arrow-left" />
            </button>
            <button className="right-button">
              <img src={Arrow} alt="arrow-right" />
            </button>
          </div>
        </div>
      </div>
      <div className="middle-block">
        <div
          className="middle-block-container velour"
          style={{
            backgroundImage: `url(${require("../static/Velour-Noir.png")})`,
          }}
        >
          <div className="block-with-info-middle">
            <p className="up-info red-text">
              Пряный шлейф кожи и специй. Смелый и дерзкий характер..
            </p>
            <h2 className="title red-text">Velour Noir</h2>
            <button onClick={async () => {}}>Оформить заказ</button>
          </div>
        </div>
        <div
          className="middle-block-container"
          style={{
            backgroundImage: `url(${require("../static/silken_muse.png")})`,
          }}
        >
          <div className="block-with-info-middle silken">
            <p className="up-info">Нежное переплетение пудры и ириса.</p>
            <h2 className="title">Silken Muse</h2>
            <button onClick={async () => {}}>Оформить заказ</button>
          </div>
        </div>
      </div>
      <div
        className="bottom-block-container"
        style={{
          backgroundImage: `url(${require("../static/edel_roots.png")})`,
        }}
      >
        <div className="edel">
          <p className="up-info">
            Древесная глубина с землистыми аккордами. Для тех, кто ценит силу
            природы.
          </p>
          <h2 className="title">Edel Roots</h2>
          <button onClick={async () => {}}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}
