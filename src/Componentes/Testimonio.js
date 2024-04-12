import React from "react";

function Testimonio() {
  return (
    //El contenedor de cada testimonio
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require('..\Imagenes\testimonio-emma.png')}
        alt='Foto de Emma' />
    </div>
  );
} 
