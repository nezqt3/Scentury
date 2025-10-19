import About from "./components/About";
import BigPhotoBlock from "./components/BigPhotoBlock";
import Choose from "./components/Choose";
import Footer from "./components/Footer";
import History from "./components/History";
import InfoBlock from "./components/InfoBlock";
import StartScreen from "./components/main/StartScreen";
import Reviews from "./components/reviews/Reviews";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <StartScreen />
      <About />
      <InfoBlock />
      <History />
      <Reviews />
      <BigPhotoBlock />
      <Choose />
      <Footer />
    </div>
  );
}

export default App;
