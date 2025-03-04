import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Company from './Company.jsx';
import Recruit from './Recruit.jsx';
import Hero from './Hero.jsx';
import Nav from './Nav.jsx';
import News from './News.jsx';
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <div className="top-nav">
              <Nav isFixed={false} /> {/* PCトップページは固定しない */}
            </div>
            <News />
            <Footer />
          </>
        } />
        <Route path="/news" element={
          <>
            <Nav isFixed={true} /> {/* 下層ページは固定 */}
            <News />
            <Footer />
          </>
        } />
        <Route path="/company" element={
          <>
            <Nav isFixed={true} />
            <Company />
            <Footer />
          </>
        } />
        <Route path="/service" element={
          <>
            <Nav isFixed={true} />
            <Service />
            <Footer />
          </>
        } />
        <Route path="/recruit" element={
          <>
            <Nav isFixed={true} />
            <Recruit />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Nav isFixed={true} />
            <Contact />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}
export default App;