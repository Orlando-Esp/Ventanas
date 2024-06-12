// App.jsx
import React, { useState } from "react";
import Ventana1 from "./ventana1";
import Ventana2 from "./ventana2";
import "./Styles.css";

function App() {
  const [ventanaActual, setVentanaActual] = useState("AREA1");

  const cambiarVentana = (ventana) => {
    setVentanaActual(ventana);
  };

  return (
    <div>
      {ventanaActual === "AREA1" && <Ventana1 cambiarVentana={cambiarVentana} />}
      {ventanaActual === "GALERIA" && <Ventana2 cambiarVentana={cambiarVentana} />}
    </div>
  );
}

export default App;
