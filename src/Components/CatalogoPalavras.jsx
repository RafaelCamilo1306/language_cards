import React from 'react';
function Catalogo({ palavras }) {
  const idioma = "português"; 
  return (
    <div>
      <h2>Catálogo de Palavras ({idioma})</h2>
      {palavras.map((item, index) => (
        <div key={item.id}>
          <h3>{item.palavra}</h3>
        </div>
      ))}
        
    </div>
  )
}
export default Catalogo;