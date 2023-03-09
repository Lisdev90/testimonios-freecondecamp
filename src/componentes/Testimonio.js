import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio(props) {
  console.log("hola" + props.imagen);
  //console.log(`../imagenes/testimonio-${props.imagen}.png`);
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        //src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt=""
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
