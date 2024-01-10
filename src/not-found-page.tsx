import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    window.location.replace("https://talentprotocol.com/");
  }, [])

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
}