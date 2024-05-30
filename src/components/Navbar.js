import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 600000); // Fetch data every 10 minutes
    return () => {
      window.removeEventListener("resize", showButton);
      clearInterval(intervalId);
    };
  }, []);

  const fetchWeatherData = () => {
    
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Padang&appid=11e9744e521f42d6510fee46547f8ff3&units=metric"
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="weather-info">
            {weatherData && (
              <>
                <div>{weatherData.name}</div>
                <div>{weatherData.main.temp}&deg;C</div>
              </>
            )}
          </div>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            FOODIE
            <img
              src="/images/imgheader.png"
              alt="Logo"
              className="navbar-logo-image"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/History"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                History
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/About-Us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Content"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Content
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
