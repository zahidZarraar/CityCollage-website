import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Announcement from "./Announcement";
import Hero from "./Hero";
import About from "./About";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import Departments from "./Departments";
import Placements from "./Placements";
import Programs from "./Programs";

function App() {
  return (
    <div className="App">
      <SmoothScroll />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Announcement />
              <Hero />
              <About />
              <Programs />
              <Departments />
              <Placements />
              <Footer />
            </>
          }
        />
        {/* <Route path="/about" element={<About />} /> */}

      </Routes>
    </div>
  );
}

export default App;

// ACCENTURE | Bank of America | CapGemini | CITI Bank | Deloitte | Genpact | Hewlett Packard
// |Hindustan Unilever | HP | IBM | ICICI Securities | Infosys | JP Morgan Chase | just dial | Karvy Consultants | NIIT Technologies | NTT Data | TATA AIG Insurance | TCS | Wipro
