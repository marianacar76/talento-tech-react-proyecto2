import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export function DetalleProducto() {
  const { id } = useParams();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);

    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar el producto');
        }

        return respuesta.json();
      })
      .then((datos) => {
        const productoEncontrado = datos.find(
          (producto) => producto.id === id
        );

        setProducto(productoEncontrado);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <p>Cargando producto...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!producto) {
    return (
      <div>
        <p>No encontramos ese producto.</p>
        <Link to="/productos">Volver a productos</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Stock disponible: {producto.stock}</p>

      <Link to="/productos">Volver a productos</Link>
    </div>
  );
}