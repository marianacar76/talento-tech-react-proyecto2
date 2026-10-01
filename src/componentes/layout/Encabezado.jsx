import styles from './Encabezado.module.css'
import { Link } from 'react-router-dom'

function Encabezado() {
  return (
    <header className={styles.header}>
      <h1>Mi aplicación</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/alta">Alta de producto</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>
    </header>
  )
}

export default Encabezado