import LogoPart from "../static/logo_part.svg";

export default function Choose() {
  return (
    <div className="choose" id="#choose">
      <div className="logo">
        <img src={LogoPart} alt="part-logo" />
        <p>Created by Scentury</p>
      </div>
      <div className="main-info">
        <p>scent</p>
        <h2>
          Ваш аромат — ваш код.<br></br> Он не для всех. Он для вас.
        </h2>
        <p>century</p>
      </div>
      <button className="choose-aromat">Выбери свой аромат</button>
    </div>
  );
}
