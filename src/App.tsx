import "./App.css";
import logo from "./assets/logo.svg";
import logoWhite from "./assets/logo-white.svg";
import backLogo from "./assets/back-logo.svg";
import waitlist from "@zootools/waitlist-js";
import { useEffect, useState } from "react";
import FontFaceObserver from "fontfaceobserver";

const waitlistId = "FiWQu6gi2lHXsJaskHgA";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const joinWaitlist = async () => {
    waitlist.openPopup(waitlistId);
  };

  useEffect(() => {
    (async () => {
      await new FontFaceObserver("Mona-Sans").load();
      await new FontFaceObserver("Space Grotesk").load();
      setIsReady(true);
    })();
  }, []);

  if (!isReady) return <></>;

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
        <div className="mobile menu-btn" onClick={() => setSidebarOpen((open) => !open)}>
          <div
            style={{ transform: sidebarOpen ? "translateY(4px) rotate(45deg)" : undefined }}
            className="btn-line"
          ></div>
          <div
            style={{ transform: sidebarOpen ? "translateY(-4px) rotate(-45deg)" : undefined }}
            className="btn-line"
          ></div>
        </div>
      </div>

      <div className="mobile-menu" style={{ right: sidebarOpen ? 0 : undefined }}>
        <ul>
          <li>
            <a href="https://twitter.com/BuilderFi">Follow us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div style={{ display: "flex", flexDirection: "column", rowGap: "34px", padding: "0px 16px" }}>
          <div id="join-waitlist" onClick={joinWaitlist}>
            Join Waitlist
          </div>
        </div>
      </div>

      <img id="background-logo" src={backLogo} />

      <div id="center-container">
        <h1 id="main-title">Monetize Your Alpha</h1>
        <span id="center-sub-text">Q&A marketplace for top builders.</span>
        <div id="center-button" onClick={joinWaitlist}>
          Join Waitlist
        </div>
      </div>

      <div className="bottom-bar">
        <span className="bottom-bar-text">
          From the creators of{" "}
          <a
            href={"https://www.talentprotocol.com/"}
            style={{ textDecoration: "none", fontWeight: 700, cursor: "pointer" }}
          >
            Talent Protocol
          </a>
        </span>
        <span className="bottom-bar-text">Launching soon on Base</span>
      </div>
    </div>
  );
}

export default App;
