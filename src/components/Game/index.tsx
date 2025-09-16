'use client';
import { useEffect } from "react";

interface RpgClientType {
  start: (options: {
    server: string;
    container: string;
    width?: number;
    height?: number;
  }) => void;
}

declare global {
  interface Window {
    RpgClient: RpgClientType;
  }
}

export default function Game() {
  useEffect(() => {
    // Crear el script dinámicamente
    const script = document.createElement("script");
    script.type = "module";
    script.src = "/rpgjs/assets/main-48e4a6fd.js"; // ruta a tu bundle RPGJS
    script.crossOrigin = "anonymous";

    // Cuando el script cargue, inicializamos el cliente
    script.onload = () => {
      if (window.RpgClient) {
        window.RpgClient.start({
          server: "https://rpgserver-production.up.railway.app/", // tu servidor RPGJS
          container: "rpg",                           // id del div donde se renderiza
          width: 816,
          height: 624
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup: remover script si el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="rpg"
      style={{
        width: 816,
        height: 624,
        margin: "auto",
        position: "relative"
      }}
    />
  );
}
