import { useState, useEffect } from 'react';
import { TarjetaContacto } from '../TarjetaContacto/TarjetaContacto';

export function Directorio() {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/nosotros.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información del equipo');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setNosotros(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando equipo...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
    >
      {nosotros.map((persona) => (
        <TarjetaContacto key={persona.id} {...persona} />
      ))}
    </div>
  );
}