export default function BigPhotoBlock() {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }

  return (
    <div className="big-block">
      <p>
        Ароматы вне времени. Мы собрали коллекцию парфюмерии, которую{" "}
        <span>вы не встретите в масс-маркете.</span>
      </p>
      <img src={require("../static/bigphoto.png")} alt="big-photo" />
    </div>
  );
}
