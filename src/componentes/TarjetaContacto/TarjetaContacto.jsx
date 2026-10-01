export function TarjetaContacto({ nombre, email, puesto, foto }) {
  return (
    <div
      style={{
        background: 'white',
        color: '#333',
        borderRadius: '10px',
        padding: '15px',
        textAlign: 'center',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}
    >
      <img
        src={foto}
        alt={nombre}
        width="100"
        height="100"
        style={{ borderRadius: '50%', objectFit: 'cover' }}
      />
      <h3 style={{ margin: '10px 0 5px' }}>{nombre}</h3>
      <p style={{ margin: '0 0 5px', fontWeight: 'bold', color: '#333' }}>
        {puesto}
      </p>
      <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
        {email}
      </p>
    </div>
  );
}