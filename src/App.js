import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
         
          <Route path="/" exact element={<Home />} />
          
          <Route path="/shop" exact element={<Shop />} />
          
          <Route path="/about" exact element={<About />} />
         
          <Route path="/contact" exact element={<Contact />} />
  
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;