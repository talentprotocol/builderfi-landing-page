import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => {
    window.location.replace("https://www.notion.so/talentprotocol/builder-fi-FAQ-dcebfe7103b34d11aba90de032173b39");
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