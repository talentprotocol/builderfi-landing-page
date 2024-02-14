import "./App.css";
import logo from "./assets/logo.svg";
import logoWhite from "./assets/logo-white.svg";
import backLogo from "./assets/back-logo.svg";
import { useEffect, useState } from "react";
import FontFaceObserver from "fontfaceobserver";

const loadImage = (image: string) => {
  return new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = image;
    // wait 2 seconds to simulate loading time
    loadImg.onload = () =>
      setTimeout(() => {
        resolve(image);
      }, 2000);

    loadImg.onerror = (err) => reject(err);
  });
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      await new FontFaceObserver("Mona-Sans").load();
      await new FontFaceObserver("Space Grotesk").load();
      await Promise.all([logo, logoWhite, backLogo].map((image) => loadImage(image)));

      setIsReady(true);
    })();
  }, []);

  if (!isReady)
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <span className="loader"></span>
      </div>
    );

  return (
    <div id="container">
      <div className="desktop topbar">
        <a href={"/"}>
          <img className="logo" alt="logo" src={logo} height={"20px"} />
        </a>
        <div id="topbar-center-div">
          <a target="_blank" href="https://warpcast.com/builderfi">
            Follow us
          </a>
          <a
            target="_blank"
            href="https://www.notion.so/talentprotocol/builder-fi-FAQ-dcebfe7103b34d11aba90de032173b39"
          >
            FAQ
          </a>
        </div>
        <a target="_blank" href="https://app.builder.fi/home">
          <div id="topbar-button">Launch App</div>
        </a>
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
            <a target="_blank" href="https://warpcast.com/builderfi">
              Follow us
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.notion.so/talentprotocol/builder-fi-FAQ-dcebfe7103b34d11aba90de032173b39"
            >
              FAQ
            </a>
          </li>
        </ul>
        <div style={{ display: "flex", flexDirection: "column", rowGap: "34px", padding: "0px 16px" }}>
          <a target="_blank" href="https://app.builder.fi/home">
            <div id="join-waitlist">Launch App</div>
          </a>
        </div>
      </div>

      <img id="background-logo" src={backLogo} />

      <div id="center-container">
        <h1 id="main-title">Q&A Marketplace</h1>
        <a target="_blank" href="https://app.builder.fi/home">
          <div id="center-button">Launch App</div>
        </a>
      </div>

      <div className="bottom-bar">
        <span className="bottom-bar-text">
          From the creators of{" "}
          <a
            target="_blank"
            href={"https://www.talentprotocol.com/"}
            style={{ textDecoration: "none", fontWeight: 700, cursor: "pointer" }}
          >
            Talent Protocol
          </a>
        </span>
        <span className="bottom-bar-text">Beta live on base</span>
      </div>
    </div>
  );
}

export default App;
