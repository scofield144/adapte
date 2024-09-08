import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import Mission from "./pages/Mission/mission";
// import Menu from "./pages/Nav/menu";
import Nav from "./pages/Nav/nav";
import Partner from "./pages/Partner/Partner";
import Project from "./pages/Projects/Project";

function App() {
  return (
    <div className=" flex flex-col">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Mission />
      <Partner />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
