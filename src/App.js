import About from "./components/About";
import BigPhotoBlock from "./components/BigPhotoBlock";
import History from "./components/History";
import InfoBlock from "./components/InfoBlock";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <About />
      <InfoBlock />
      <History />
      <BigPhotoBlock />
    </div>
  );
}

export default App;
