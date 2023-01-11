import React from 'react';
import Contador from './ContadorProductos';
import { getProductos } from '../../listaProductos/ListaProductos';


const ItemDetail = () => {
    const onAdd = (cantidad) => console.log(cantidad);
    
    return (
        <div>
            <img src="" alt="" />
            <div>
                <h2></h2>
                <p>
                    Detalles del producto
                </p>
                <h3>Precio$$$</h3>
                <Contador stock={25} onAdd={onAdd} />
            </div>
        </div>
    );
};

export default ItemDetail;
