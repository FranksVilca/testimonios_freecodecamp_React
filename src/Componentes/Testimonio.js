import React from "react";
import '../hoja-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    //El contenedor de cada testimonio
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt='Foto de Emma' />
      <div className='contenedor-texto-textimonio'>
       <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
       </p>  
       <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
       </p>
       <p className='texto-testimonio'>
          "{props.testimonio}"
       </p>
      </div>  
    </div>
  );
}


export default Testimonio;
