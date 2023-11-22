import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const App = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState(1); 
  const [total, setTotal] = useState(0);

  const agregarProducto = () => {
    if (nombre && precio) {
      const nuevoProducto = {
        nombre,
        descripcion,
        precio: parseFloat(precio),
        cantidad: parseInt(cantidad, 10),
      };
  
      setProductos([...productos, nuevoProducto]);
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setCantidad(1);
      setTotal(total + nuevoProducto.precio * nuevoProducto.cantidad);
    }
  };

  const quitarProducto = (productoEliminado) => {
    const nuevosProductos = productos.filter((producto) => producto !== productoEliminado);
    setProductos(nuevosProductos);
    setTotal(total - productoEliminado.precio * productoEliminado.cantidad);
  };
  

  const actualizarTotal = () => {
    const nuevoTotal = productos.reduce(
      (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);
  };

  return (
    <div className="app">
      <div className="columna-formulario">
      <h2>Cargar Productos</h2>
        <label>Nombre:</label><span className="text-danger">*</span>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label>Descripción:</label>
        <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

        <label>Precio:</label><span className="text-danger">*</span>
        <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />

        <label>Cantidad:</label>
        <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />

        <button onClick={agregarProducto} disabled={!nombre || !precio}>
          Agregar
        </button>
      </div>

      <div className="columna-carrito">
        <div className="total">
          <p><FontAwesomeIcon icon={faShoppingCart} />  Total: ${total.toFixed(2)} </p>
        </div>
        <h3>
          Lista de Productos 
        </h3>
        {productos.length === 0 ? (
          <p>Cargar productos...</p>
        ) : (
          <ul>
            {productos.map((producto, id) => (
              <li key={id}>
                {producto.nombre} - {producto.descripcion} - ${producto.precio} - Cantidad: {producto.cantidad}
                <button onClick={() => quitarProducto(producto)}> Quitar</button>

              </li>
            ))}
          </ul>
        )}

       
      </div>
    </div>
  );
};

export default App;




const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App />);