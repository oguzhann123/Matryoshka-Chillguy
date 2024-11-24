import React, { useState, useEffect } from "react";
import Loader from "./components/Loader.js";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          {/* Home Bölümü */}
          <section className="home">
            <header className="header">
            <h1 className="neon-text">
       <div>Matryoshka Chillguy</div>
      </h1>
            </header>
          
            <div className="footer">
  <div className="logos">
    <div className="logo-item">
      <button
        className="neon-button"
        onClick={() => (window.location.href = "https://raydium.io/swap/")}
      >
        Buy
      </button>
    </div>
    <div className="logo-item">
      <img
        src="/x.png"
        alt="Logo 2"
        className="logo"
        onClick={() => (window.location.href = "https://x.com/SmallStarinSky")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="logo-item">
      <img
        src="/dex.png"
        alt="Logo 3"
        className="logo"
        onClick={() => (window.location.href = "https://dexscreener.com/")}
        style={{ cursor: "pointer" }}
      />
    </div>
    <div className="logo-item">
      <button
        className="neon-button"
        onClick={() => (window.location.href = "https://spinsol.xyz/")}
      >
       Spin
      </button>
    </div>
  </div>
</div>

          </section>
          <div className="divider-animated"></div>

{/* About Bölümü */}
<section className="about">
  <div className="about-card">
    <h2 className="fancy-title">Matryoshka Chillguy</h2>
    <p className="fancy-text">
      🌌 Total Supply:  
       <span className="highlight-text">17590163.934426 MC</span>  
    </p>
    <p className="fancy-text">
    ✨Liquidity:  
      <span className="neon-accent">Burned</span>  
    </p>
    <p className="fancy-text">
      🚀 <span className="glow-text">Contract Address:</span>  
      <span className="highlight-text" id="contract-address">F49...Abc456</span>  
      <button
        className="copy-btn"
        onClick={() => {
          navigator.clipboard.writeText('F498hs9GQon7SX4dwbWSuUJnERwnZLqamhFK7eiypump');
          alert('Address Copied! “Matryoshkas multiply; so do we!” 🚀');
        }}
      >
        Copy
      </button>
    </p>
    <p className="meme-text">“Matryoshkas multiply; so do we!”</p>
  </div>
</section>


        </div>
      )}
    </div>
  );
};

export default App;
