import About from "./Components/About/About.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Education from "./Components/Education/Education.jsx";

function App() {
  return (
    <div className="bg-[#171d32] h-auto overflow-hidden w-full max-w-[1920px] mx-auto">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
