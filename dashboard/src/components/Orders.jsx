import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-backend-u9w5.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours and 30 minutes in milliseconds
    const istDate = new Date(date.getTime() - istOffset);

    const year = istDate.getFullYear();
    const month = String(istDate.getMonth() + 1).padStart(2, "0");
    const day = String(istDate.getDate()).padStart(2, "0");
    const hours = String(istDate.getHours()).padStart(2, "0");
    const minutes = String(istDate.getMinutes()).padStart(2, "0");
    const seconds = String(istDate.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div className="orders">
        <h3 className="title">Orders ({allOrders.length})</h3>
        {allOrders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        ) : (
          <div className="order-table">
            <table>
              <tr>
                <th>Instrument</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Created At</th>
              </tr>
              {allOrders.map((stock, index) => {
                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{stock.mode}</td>
                    <td>{formatDateString(stock.createdAt)}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
