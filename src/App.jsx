import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './componentes/layout/Layout'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { FormularioContainer } from './componentes/FormularioContainer/FormularioContainer'
import { DetalleProducto } from './componentes/DetalleProducto/DetalleProducto';
import { Inicio } from './componentes/Inicio/Inicio';
import { Carrito } from './componentes/Carrito/Carrito';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/productos"
          element={
            <ItemListContainer Mensaje="Nuestros productos" />
          }
        />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route
          path="/alta"
          element={<FormularioContainer />}
        />

        <Route path="/carrito" element={<Carrito />} />
      </Route>
    </Routes>
  )
}

export default App