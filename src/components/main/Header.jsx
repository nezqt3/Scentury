import LogoPart from "../../static/logo_part.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-header">
        <img src={LogoPart} alt="part-logo" />
        <p>Scentury</p>
      </div>
    </header>
  );
}
