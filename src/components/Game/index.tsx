'use client'
import React from "react";

export default function RPGFrame() {
  
    const playerName = "Diego";
  
    return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
      <iframe
         src={`https://rpgserver-production.up.railway.app/?player=${encodeURIComponent(playerName)}`}
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
