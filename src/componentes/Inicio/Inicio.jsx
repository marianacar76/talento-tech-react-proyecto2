import { Link } from 'react-router-dom';

export function Inicio() {
  return (
    <section style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Bienvenidos a nuestra tienda</h2>

      <p>
        Encontrá útiles y accesorios para estudiar,
        trabajar y organizar tu día.
      </p>

      <Link to="/productos">Ver nuestros productos</Link>
    </section>
  );
}
