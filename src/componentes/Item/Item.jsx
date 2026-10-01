import { useState } from 'react';
import { Link } from 'react-router-dom';


export function Item({ id, nombre, precio, stock }) {
  const [cantidad, setCantidad] = useState(0);
  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      <h3>
        <Link to={`/producto/${id}`}>
          {nombre}
        </Link>
      </h3>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px 0' }}>
        <button onClick={decrementar}>-</button>
        <p style={{ margin: '0 10px' }}>{cantidad}</p>
        <button onClick={incrementar}>+</button>
      </div>

      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>

      <span onClick={marcarComoFavorito} style={{ fontSize: '24px', cursor: 'pointer', marginLeft: '10px' }}>
        {esFavorito ? '⭐' : '☆'}
      </span>
    </div>
  );
}