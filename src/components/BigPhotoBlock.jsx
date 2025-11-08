export default function BigPhotoBlock() {
  return (
    <div className="big-block">
      <p>
        Ароматы вне времени. Мы собрали коллекцию парфюмерии, которую{" "}
        <span>
          вы <br />
          не встретите в масс-маркете.
        </span>
      </p>
      <img src={require("../static/bigphoto.png")} alt="big-photo" />
    </div>
  );
}
