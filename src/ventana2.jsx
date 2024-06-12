import React from "react";

function Ventana2({ cambiarVentana }) {
  return (
    <div className="window">
      <header>
        <h1>GALERIA</h1>
      </header>
      <div className="content">
        <div className="box">
          <div className="image-spaces">
            {/* Espacios para imágenes */}
            <div className="image-box"><img src="ruta/a/img1.avif" alt="Imagen 1" /></div>
            <div className="image-box"><img src="ruta/a/img2.jpg" alt="Imagen 2" /></div>
            <div className="image-box"><img src="ruta/a/img3.jpg" alt="Imagen 3" /></div>
            <div className="image-box"><img src="ruta/a/img4.jpg" alt="Imagen 4" /></div>
            <div className="image-box"><img src="ruta/a/img5.jpg" alt="Imagen 5" /></div>
            <div className="image-box"><img src="ruta/a/img6.jpeg" alt="Imagen 6" /></div>
            <div className="image-box"><img src="ruta/a/img7.jpeg" alt="Imagen 7" /></div>
            <div className="image-box"><img src="ruta/a/img8.jpeg" alt="Imagen 8" /></div>
          </div>
        </div>
      </div>
      <nav>
        <button onClick={() => window.location.href = "/"}>👀</button>
        <button onClick={() => cambiarVentana("GALERIA")}>🎃</button>
      </nav>
    </div>
  );
}

export default Ventana2;
