

// import { useState } from 'react';
// import Header from './components/Header';
// import ReactiveForm from './components/ReactiveForm';
// import Navbar from './components/Sidebar';
// import AboutUs from './sections/AboutUs';
// import HowItWorks from './sections/HowItWorks';
// import OurServices from './sections/OurServices';
// import SpecialOffers from './sections/SpecialOffers';
// import './styles/App.css';
// // src/sections/OurServices.jsx
// import './sections/Sections.css';


// const App = () => {
//   const [showNav, setShowNav] = useState(true);
//   const [showForm, setShowForm] = useState(false);

//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="app">
//       <Header scrollTo={scrollTo} />
      
//       {/* <button className="toggle-nav" onClick={() => setShowNav((prev) => !prev)}>
//         ☰
//       </button> */}

//       {showNav && <Navbar scrollTo={scrollTo} />}

//       <main>
//         <section id="services">
//           <OurServices onBookClick={() => setShowForm(true)} />
//         </section>

//         <section id="offers">
//           <SpecialOffers />
//         </section>

//         <section id="how">
//           <HowItWorks />
//         </section>

//         <section id="about">
//           <AboutUs />
//         </section>

//         {showForm && <ReactiveForm onClose={() => setShowForm(false)} />}
//       </main>
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import ReactiveForm from "./components/ReactiveForm";
import Sidebar from "./components/Sidebar";
import SignupForm from "./components/SignupForm";

import AboutUs from "./sections/AboutUs";
import HowItWorks from "./sections/HowItWorks";
import OurServices from "./sections/OurServices";
import SpecialOffers from "./sections/SpecialOffers";

import "./sections/Sections.css";
import "./styles/App.css";

const HomePage = () => {
  const [showNav, setShowNav] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Header scrollTo={scrollTo} />
      {showNav && <Sidebar scrollTo={scrollTo} />}

      <main>
        <section id="services">
          <OurServices onBookClick={() => setShowForm(true)} />
        </section>

        <section id="offers">
          <SpecialOffers />
        </section>

        <section id="how">
          <HowItWorks />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        {showForm && <ReactiveForm onClose={() => setShowForm(false)} />}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}
