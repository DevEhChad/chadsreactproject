import "./App.css";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Discord from "./components/DiscordInt"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Socials from "./pages/Socials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Applications from "./pages/Applications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Eh Chad Services</title>
        <link rel="canonical" href="http://ehchadservices.com/" />
        <meta name="description" content="ehchadservices.com" />
      </Helmet>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" exact element={<Home />} />

          {/* <Route path="/shop" exact element={<Shop />} /> */}

          {/*<Route path="/applications" exact element={<Applications />} /> */}

          <Route path="/socials" exact element={<Socials />} />

          <Route path="/about" exact element={<About />} />

          {/* <Route path="/contact" exact element={<Contact />} /> */}

        </Routes>
        <Discord />
        <Footer />
      </Router>
    </div>
  );
}

export default App;