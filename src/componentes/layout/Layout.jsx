import Encabezado from './Encabezado'
import PieDePosteo from './PieDePosteo'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div>
      <Encabezado />
      <main>
        <Outlet />
      </main>
      <PieDePosteo />
    </div>
  )
}