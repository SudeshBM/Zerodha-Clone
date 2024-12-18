import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import "./Home.css";

function Home() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [showPopup, setShowPopup] = useState(!isDesktop);

  useEffect(() => {
    const handleResize = () => {
      const desktopView = window.innerWidth >= 992;
      setIsDesktop(desktopView);
      setShowPopup(!desktopView);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>
              Please open this page in desktop mode for the best experience.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
