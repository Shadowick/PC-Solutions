import { useState } from 'react';
import './ContadorProductos';

const Contador = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const reset = () => {
        setCantidad(0);
    };

    const agregar = () => onAdd(cantidad);

    return (
        <div className='container-fluid estiloContadorProductos'>
            <button className='btn btn-secondary' onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button className='btn btn-secondary' disabled={cantidad === stock} onClick={sumar}>
                +
            </button>
            <button className='btn btn-secondary' onClick={reset}>Eliminar</button>
            <button className='btn btn-secondary' onClick={agregar}>Agregar al carrito</button>
        </div>
    );
};

export default Contador;
