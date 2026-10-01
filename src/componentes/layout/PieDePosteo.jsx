
import styles from './PieDePosteo.module.css'
import { Directorio } from '../Directorio/Directorio'

function PieDePosteo() {
  return (
    <footer className={styles.footer}>
      <Directorio />
      <p>© 2026 Mi aplicación. Todos los derechos reservados.</p>
    </footer>
  )
}

export default PieDePosteo