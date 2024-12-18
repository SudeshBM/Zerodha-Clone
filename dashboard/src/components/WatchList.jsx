import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { watchlist as initialWatchlist } from "../data/data";
import {
  BarChartOutlined,
  DeleteOutline,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnoutChart } from "./DoughnoutChart";

const labels = initialWatchlist.map((subArray) => subArray["name"]);

function WatchList() {
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [marketOpen, setMarketOpen] = useState(false);

  useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date();
      const currentHourIST =
        now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60);
      const currentMinuteIST = (now.getUTCMinutes() + 30) % 60;

      // Check if current time is between 9:00 AM and 4:00 PM IST
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
    const updatePrices = () => {
      if (marketOpen) {
        const updatedWatchlist = watchlist.map((stock) => ({
          ...stock,
          price: stock.price * (0.98 + Math.random() * 0.04),
          percent: ((Math.random() - 0.5) * 2).toFixed(2) + "%",
          isDown: Math.random() > 0.5,
        }));
        setWatchlist(updatedWatchlist);
      }
    };

    const intervalId = setInterval(updatePrices, 2000);
    return () => clearInterval(intervalId);
  }, [watchlist, marketOpen]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 232, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        BorderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 232, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="watchlist-container">
      <p style={{ textAlign: "center" }}>
        <small>
          <em>
            {marketOpen
              ? ""
              : "Market is closed, check live prices between 9:15AM - 3:30PM (Mon - Fri)"}
          </em>
        </small>
      </p>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Serach eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnoutChart data={data} />
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (event) => {
    setShowWatchlistActions(true);
  };

  const handleMouseExit = (event) => {
    setShowWatchlistActions(false);
  };

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">{stock.price.toFixed(2)}</span>
          </div>
        </div>
        {showWatchlistActions && <WatchListActions uid={stock.name} />}
      </li>
    </>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined />
          </button>
        </Tooltip>
        <Tooltip
          title="Delete (D)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <DeleteOutline />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
