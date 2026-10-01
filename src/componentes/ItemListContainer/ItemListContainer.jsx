import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';

export function ItemListContainer({ Mensaje }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar los productos');
        }

        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{Mensaje}</h2>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}