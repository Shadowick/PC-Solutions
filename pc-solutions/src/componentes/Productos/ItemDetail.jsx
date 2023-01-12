import React from 'react';
import Contador from './ContadorProductos';
import './Item.css';


const ItemDetail = ({ producto }) => {
    const onAdd = (cantidad) => console.log(cantidad);
    
    return (
        <div className='Item'>
            <img src={producto.img} alt={producto.title} />
            <div>
                <h2>{producto.title}</h2>
                <p>
                    {producto.detail}
                </p>
                <h3>${producto.price}</h3>
                <Contador stock={producto.stock} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;