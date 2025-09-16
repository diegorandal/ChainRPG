import React from "react";

export default function RpgGame() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <iframe
        src="/rpgjs/index.html" // apunta a tu build en public/rpgjs
        style={{
          width: "816px",
          height: "624px",
          maxWidth: "100%",
          maxHeight: "100%",
          border: "none",
        }}
        allowFullScreen
      />
    </div>
  );
}
