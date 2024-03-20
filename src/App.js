import About from "./components/about";
import Contact from "./components/Contact";
import Experience from "./components/Experince";
import Home from "./components/home";
import NAvBar from "./components/NAvBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
     <NAvBar/>
     <Home />
     <SocialLinks/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
    </div>
  );
}

export default App;
