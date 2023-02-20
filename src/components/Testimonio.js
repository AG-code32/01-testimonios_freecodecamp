import React from "react";
import '../stylesheets/Testimonio.css';

  var initText = '';
  var boldText = '';
  var finalText = '';
  var textoNegritaShawn = 'freeCodeCamp cambió mi vida.';
  var textoNegritaSarah = 'freeCodeCamp fue la puerta de entrada a mi carrera';
  var textoNegritaEmma = 'freeCodeCamp me dio las habilidades';

function Testimonio(props) {
  
  var texto = props.testimonio;

  if (props.nombre === 'Shawn Wang') {
    
    SplitText(textoNegritaShawn, texto);

  }

  if (props.nombre === 'Sarah Chima') {
    
    SplitText(textoNegritaSarah, texto);

  }

  if (props.nombre === 'Emma Bostian') {
    
    SplitText(textoNegritaEmma, texto);

  }


  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/${props.imagen}.png`)}
        alt={`Foto de ${props.imagen}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        {/* <p className="texto-testimonio">{props.testimonio}</p> */}
        <p className="texto-testimonio">"{initText}<b>{boldText}</b>{finalText}"</p>
      </div>


    </div>
  );
}

function SplitText(textoNegrita, text){
  let startIndex = text.indexOf(textoNegrita);

  console.log(startIndex);

  initText = text.substring(0, startIndex);
  boldText = text.substring(startIndex, startIndex + textoNegrita.length);
  finalText = text.substring(startIndex + textoNegrita.length, text.length);
}

export default Testimonio;