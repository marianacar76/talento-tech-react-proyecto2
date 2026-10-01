import { Link } from 'react-router-dom';

export function Carrito() {
  return (
    <section style={{ padding: '30px', textAlign: 'center' }}>
      <h2>Carrito de compras</h2>
      <p>Tu carrito está vacío.</p>

      <Link to="/productos">Ver productos</Link>
    </section>
  );
}