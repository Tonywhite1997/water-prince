import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Contact from "./components/Contact";
import About from "./components/About";
import BlogMain from "./components/blog/BlogMain";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<BlogMain />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
