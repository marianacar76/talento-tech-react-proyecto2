export function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  cargando,

}) {

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '30px auto',
    padding: '24px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    gap: '16px',
  }

  return (
    <form style={formStyle} onSubmit={manejarEnvio}>
      <h3>Agregar nuevo producto</h3>

      <div>
        <label htmlFor="nombre">Nombre del producto:</label>
        <input
          id="nombre"
          type="text"
          placeholder="Ej: Cuaderno"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          id="precio"
          type="number"
          placeholder="Ej: 3500"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          id="stock"
          type="number"
          placeholder="Ej: 20"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label htmlFor="imagen">Imagen:</label>
        <input
          id="imagen"
          type="file"
          accept="image/*"
          onChange={manejarCambioImagen}
        />
      </div>

      <button type="submit" disabled={cargando}>
        {cargando ? 'Subiendo...' : 'Guardar producto'}
      </button>
    </form>
  )
}
