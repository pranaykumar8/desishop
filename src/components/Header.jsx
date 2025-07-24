// // import { Link } from "react-router-dom";
// // import "./Header.css";

// // export default function Header({ toggleSidebar, scrollTo }) {
// //   const handleCopy = () => {
// //     navigator.clipboard.writeText(
// //       "Unit 104, 1st Floor, Manjeera Trinity Corporate, KPHB, Kukatpally, Hyderabad, Tirumalagiri, Telangana, India, 500072"
// //     );
// //     alert("📋 Address copied!");
// //   };

// //   return (
// //     <header className="header">
// //       <h1 className="logo">🛍️ DesiShop</h1>
// //       <nav className="nav-links">
// //         <button onClick={() => scrollTo("services")}>Book Personal Shopper</button>
// //         <button onClick={() => scrollTo("offers")}>Mail Box</button>
// //         <button onClick={() => scrollTo("how")}>Book a Shipment</button>
// //         <button onClick={() => scrollTo("about")}>Desi Foods</button>
// //       </nav>

// //       <div className="copy-address-box">
// //         <button className="copy-btn" onClick={handleCopy}>Copy Address</button>
// //         <Link to="/signup" className="action-btn">Signup</Link>
// //         <Link to="/login" className="action-btn">Login</Link>
// //       </div>
// //     </header>
// //   );
// // }

// import { useNavigate } from 'react-router-dom';
// import './Header.css'; // external styles

// const Header = ({ scrollTo }) => {
//   const navigate = useNavigate();

//   return (
//     <header className="header">
//       <div className="header-left">
//         <h1 className="logo" onClick={() => scrollTo('top')}>DesiShop</h1>
//       </div>

//       <nav className="header-nav">
//         <button onClick={() => scrollTo('services')}>Personal Shopper</button>
//         <button onClick={() => scrollTo('mailbox')}>Mail Box</button>
//         <button onClick={() => scrollTo('shipment')}>Book a Shipment</button>
//         <button onClick={() => scrollTo('foods')}>Desi Foods</button>
//         <button onClick={() => window.open("https://amazon.in", "_blank")}>Amazon</button>
//         <button onClick={() => window.open("https://flipkart.com", "_blank")}>Flipkart</button>
//       </nav>

//       <div className="header-buttons">
//         <button onClick={() => navigate("/signup")}>Signup</button>
//         <button onClick={() => navigate("/login")}>Login</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ scrollTo }) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    const address = '123 Main Street, New York, NY 10001'; // Replace with your real address
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo" onClick={() => scrollTo('top')}>🛍️DesiShop</h1>
      </div>

      <nav className="header-nav">
        <button onClick={() => scrollTo('services')}>Personal Shopper</button>
        <button onClick={() => scrollTo('mailbox')}>Mail Box</button>
        <button onClick={() => scrollTo('shipment')}>Book a Shipment</button>
        <button onClick={() => scrollTo('foods')}>Desi Foods</button>
        <button onClick={() => window.open("https://amazon.in", "_blank")}>Amazon</button>
        <button onClick={() => window.open("https://flipkart.com", "_blank")}>Flipkart</button>
      </nav>

      <div className="header-buttons">
        <div className="copy-container">
          <button onClick={copyAddress} className="copy-btn">Address</button>
          {copied && <span className="copied-msg">Copied!</span>}
        </div>
        <button onClick={() => navigate("/signup")}>Signup</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </header>
  );
};

export default Header;
