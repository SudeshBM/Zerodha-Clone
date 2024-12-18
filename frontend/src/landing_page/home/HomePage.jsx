import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }

      const { data } = await axios.post(
        "https://zerodha-server.onrender.com",
        {},
        { withCredentials: true }
      );

      const { status, user } = data;
      status ? setIsLoggedIn(true) : setIsLoggedIn(false);
      setUsername(user);

      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/"));
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn && (
        <div className="mx-5 px-5 mt-5">
          <h4 style={{ display: "inline" }}>
            {" "}
            Welcome <span>{username}</span>
          </h4>{" "}
          <button className="btn btn-danger" onClick={Logout}>
            LOGOUT
          </button>
        </div>
      )}
      <Hero isLoggedIn={isLoggedIn} />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
