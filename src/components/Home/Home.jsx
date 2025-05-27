import React from "react";
import { useState } from "react";
import "./Home.css"; // Custom CSS file


// function Home({logo}) {

//   function HandleClick(){
//     alert("Commimg Soon..")
//   }
//   return (
//     <div className="home-container">
//       <div className="center-content">
//         <img src={logo} alt="Logo" className="logo" st />
//         <h2 className="tagline">Pure Tradition, Pure you!</h2>
//         <p className="sanskrit">-स्वस्थस्य स्वास्थ्य रक्षणं-</p>
//         <p className="sub-sanskrit"><em>-Preserve the health of the healthy-</em></p>
//         <p className="description">
//           With this philosophy—rooted with absolute purity, traditional discipline, and a commitment to authenticity—
//           <strong> Agrim Ayurveda</strong> is your sanctuary of balance. Each blend is a tribute to ancient wisdom, crafted
//           to nourish both skin and spirit.
//         </p>
//       </div>

//       <nav className="bottom-nav nav-container">
//         {["Home", "Products", "Brand", "Shop", "wellness", "Contact us"].map((item) => (
//           <div className="nav-item nav-list" key={item} onClick = {()=> HandleClick()}>{item}</div>
//         ))}
//       </nav>
//     </div>
//   );
// }

// export default Home;


function Home({ logo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function HandleClick() {
    alert("Coming Soon..");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="home-container">
      {/* Mobile Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>

      {/* Mobile Side Navigation */}
      <nav className={`side-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>×</div>
        <ul className="side-nav-list">
          {["Home", "Products", "Brand", "Shop", "Wellness", "Contact us"].map((item) => (
            <li 
              key={item} 
              className="side-nav-item" 
              onClick={() => {
                HandleClick();
                setIsMenuOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="center-content">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="tagline">Pure Tradition, Pure you!</h2>
        <p className="sanskrit">-स्वस्थस्य स्वास्थ्य रक्षणं-</p>
        <p className="sub-sanskrit"><em>-Preserve the health of the healthy-</em></p>
        <p className="description">
          With this philosophy—rooted with absolute purity, traditional discipline, and a commitment to authenticity—
          <strong> Agrim Ayurveda</strong> is your sanctuary of balance. Each blend is a tribute to ancient wisdom, crafted
          to nourish both skin and spirit.
        </p>
      </div>

      {/* Desktop Navigation */}
      <nav className="bottom-nav">
        {["Home", "Products", "Brand", "Shop", "Wellness", "Contact us"].map((item) => (
          <div className="nav-item" key={item} onClick={() => HandleClick()}>
            {item}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Home;