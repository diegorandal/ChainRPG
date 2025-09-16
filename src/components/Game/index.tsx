'use client'
import React from "react";

export default function RPGFrame() {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
      <iframe
        src="https://rpgserver-production.up.railway.app/"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="RPG Game"
      />
    </div>
  );
}
