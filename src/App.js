import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Contact, About, Footer, Home, Services } from "./pages";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
