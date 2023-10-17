import "./App.css";
import logo from "./assets/logo.svg";
import logoWhite from "./assets/logo-white.svg";
import backLogo from "./assets/back-logo.svg";

import airstackLogo from "./assets/airstack-logo.svg";
import polygonLogo from "./assets/polygon-logo.svg";
import mantleLogo from "./assets/mantle-logo.svg";
import taikoLogo from "./assets/taiko-logo.svg";
import baseLogo from "./assets/base-logo.svg";

import airstackLogoWhite from "./assets/airstack-logo-white.svg";
import polygonLogoWhite from "./assets/polygon-logo-white.svg";
import mantleLogoWhite from "./assets/mantle-logo-white.svg";
import taikoLogoWhite from "./assets/taiko-logo-white.svg";

import waitlist from "@zootools/waitlist-js";

const waitlistId = "FiWQu6gi2lHXsJaskHgA";

function App() {
  const joinWaitlist = async () => {
    waitlist.openPopup(waitlistId);
  };
  return (
    <div id="container">
      <div className="desktop topbar">
        <a href={"/"}>
          <img className="logo" alt="logo" src={logo} height={"20px"} />
        </a>
        <div id="topbar-center-div">
          <a href="https://twitter.com/BuilderFi">Follow us</a>
          <a href={"#"}>FAQ</a>
        </div>
        <div id="topbar-button" onClick={joinWaitlist}>
          Join Waitlist
        </div>
      </div>

      <div className="mobile topbar-mobile">
        <a href={"/"}>
          <img className="logo" alt="logo" src={logoWhite} height={"20px"} />
        </a>

        {/* Hamburger menu */}
        <div className="menu-btn" onClick={(e) => e.currentTarget.classList.toggle("active")}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="https://twitter.com/BuilderFi">Follow us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div style={{ display: "flex", flexDirection: "column", rowGap: "34px", padding: "0px 16px" }}>
            <span className="launching-soon mobile">
              Launching soon on
              <img src={baseLogo} alt="base logo" />
            </span>
            <div id="join-waitlist" onClick={joinWaitlist}>
              Join Waitlist
            </div>
          </div>
        </div>
      </div>

      <img id="background-logo" src={backLogo} />

      <div id="center-container">
        <h1 id="main-title">Monetize Your Expertise</h1>
        <span id="center-sub-text">Make a profit by answering questions and investing in top builders</span>
        <div id="center-button" onClick={joinWaitlist}>
          Join Waitlist
        </div>
      </div>

      <div id="inner-container">
        <span className="launching-soon desktop">
          Launching soon on
          <img src={baseLogo} alt="base logo" />
        </span>

        <div className="bottom-bar desktop">
          <span id="bottom-bar-text">Top Winner Ethereum Singapore Hackathon</span>
          <span id="logo-container">
            <img className="bottom-bar-logo" src={polygonLogo} alt="polygon logo" />{" "}
            <img className="bottom-bar-logo" src={mantleLogo} alt="mantle logo" />
            <img className="bottom-bar-logo" src={taikoLogo} alt="taiko logo" />{" "}
            <img className="bottom-bar-logo" src={airstackLogo} alt="airstack logo" />
          </span>
        </div>
      </div>
      <div className="mobile bottom-bar">
        <span id="bottom-bar-text">Top Winner Ethereum Singapore Hackathon</span>
        <span id="logo-container">
          <img className="bottom-bar-logo" src={polygonLogoWhite} alt="polygon logo" />{" "}
          <img className="bottom-bar-logo" src={mantleLogoWhite} alt="mantle logo" />
          <img className="bottom-bar-logo" src={taikoLogoWhite} alt="taiko logo" />{" "}
          <img className="bottom-bar-logo" src={airstackLogoWhite} alt="airstack logo" />
        </span>
      </div>
    </div>
  );
}

export default App;
