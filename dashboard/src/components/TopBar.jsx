import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function TopBar() {
  const [marketOpen, setMarketOpen] = useState(false);
  const [nifty, setNifty] = useState(24000.34);
  const [sensex, setSensex] = useState(79724.12);

  useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date();
      const currentHourIST =
        now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60);
      const currentMinuteIST = (now.getUTCMinutes() + 30) % 60;

      // Check if current time is between 9:00 AM and 3:30 PM IST
      const isMarketOpen =
        (currentHourIST > 9 ||
          (currentHourIST === 9 && currentMinuteIST >= 15)) &&
        (currentHourIST < 15 ||
          (currentHourIST === 15 && currentMinuteIST <= 30));
      setMarketOpen(isMarketOpen);
    };

    checkMarketStatus();

    const statusIntervalId = setInterval(checkMarketStatus, 15000);

    return () => clearInterval(statusIntervalId);
  }, []);

  useEffect(() => {
    const updateNiftyPrice = () => {
      if (!marketOpen) {
        const change = (Math.random() - 0.5) * 100;
        setNifty((prevNifty) => parseFloat((prevNifty + change).toFixed(2)));
      }
    };
    const intervalId = setInterval(updateNiftyPrice, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updateSensexPrice = () => {
      if (!marketOpen) {
        const change = (Math.random() - 0.5) * 200;
        setSensex((prevSensex) => parseFloat((prevSensex + change).toFixed(2)));
      }
    };
    const intervalId = setInterval(updateSensexPrice, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="topbar-container">
        <div className="indices-container">
          <div className="nifty">
            <p className="index">NIFTY 50</p>
            <p className={`index-points ${nifty > 24000 ? "up" : "down"}`}>
              {nifty}
            </p>
            <p className="percent"></p>
          </div>
          <div className="sensex">
            <p className="index">SENSEX</p>
            <p className={`index-points ${nifty > 24000 ? "up" : "down"}`}>
              {sensex}
            </p>
            <p className="percent"></p>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
}

export default TopBar;
