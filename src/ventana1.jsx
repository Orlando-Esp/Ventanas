// Ventana1.jsx
import React from "react";

function Ventana1({ cambiarVentana }) {
  return (
    <div className="window">
      <header>
        <h1>AREA1</h1>
      </header>
      <div className="content">
        <div className="box">
          <h2 className="titulo">TITULO</h2>
          <p>En el corazón de la selva, donde los rayos del sol apenas logran filtrarse entre el denso dosel de árboles, y el aire está impregnado con el perfume húmedo de la vegetación, se encuentra un misterioso templo perdido. Sus muros de piedra se alzan majestuosos, cubiertos de enredaderas y musgo, mientras que las antiguas estatuas guardan silencio eterno en sus entradas. Quienes se aventuran a adentrarse en sus oscuros pasillos, se encuentran cara a cara con secretos olvidados por milenios y peligros que desafían la razón.</p>
          <div className="flex-container">
            <div className="left-text">En la tranquila ciudad costera de Mar Azul, cada amanecer trae consigo el susurro del océano y la promesa de un nuevo día lleno de posibilidades. Los pescadores se preparan para zarpar en sus coloridas embarcaciones, mientras que los lugareños se reúnen en la plaza central para disfrutar del fresco aroma del café y compartir historias de tiempos pasados. Sin embargo, bajo la aparente calma, se esconden intrigas familiares, romances clandestinos y sueños por cumplir que aguardan su momento para emerger a la superficie.</div>
            <div className="right-text">En el vasto desierto de dunas interminables, donde el sol abrasador pinta el horizonte de tonos dorados y el viento susurra secretos ancestrales, un viajero solitario avanza con determinación. Con cada paso, deja atrás el rastro de sus huellas en la arena ardiente, mientras que el eco de sus pensamientos se pierde en la inmensidad del paisaje. En su búsqueda de respuestas, se enfrenta a desafíos que ponen a prueba su resistencia y valentía, pero también descubre la belleza oculta en la simplicidad del desierto y la sabiduría de la soledad.</div>
          </div>
        </div>
      </div>
      <nav>
        <button onClick={() => window.location.href = "/"}>🏠</button>
        <button onClick={() => cambiarVentana("GALERIA")}>🖼️</button>
      </nav>
    </div>
  );
}

export default Ventana1;
