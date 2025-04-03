import { Route, Routes } from "react-router-dom";
import About from "./About";
import Admissions from "./Admissions";
import Announcement from "./Announcement";
import "./App.css";
import CampusLife from "./CampusLife";
import Departments from "./Departments";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Maps from "./Maps";
import Newsandevents from "./Newsandevents";
import Placements from "./Placements";
import Programs from "./Programs";

function App() {
  return (
    <div className="App">
      {/* <SmoothScroll /> */}
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
              <Newsandevents />
              <CampusLife />
              <Placements />
              <Maps />
              <Footer />
            </>
          }
        />

        <Route
          path="/admissions"
          element={
            <>
              <Header /> <Admissions /> <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

// ACCENTURE | Bank of America | CapGemini | CITI Bank | Deloitte | Genpact | Hewlett Packard
// |Hindustan Unilever | HP | IBM | ICICI Securities | Infosys | JP Morgan Chase | just dial | Karvy Consultants | NIIT Technologies | NTT Data | TATA AIG Insurance | TCS | Wipro
