import styles from './TarjetaProducto.module.css'

function TarjetaProducto({ imagen, nombre, precio }) {
  return (
   <article className={styles.tarjeta}>
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </article>
  )
}

export default TarjetaProducto