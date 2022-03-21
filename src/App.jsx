import "./App.css";
import  Footer  from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import Offers from "./Components/Offers";
import Catog from "./Components/Catog";
function App() {
  return (
    <div className="App home-container flex-col">
      <Navbar/>
      <HeroSlider/>
      <Offers/>
      <Catog/>
      <Footer/> 
    </div>
  );
}

export default App;
