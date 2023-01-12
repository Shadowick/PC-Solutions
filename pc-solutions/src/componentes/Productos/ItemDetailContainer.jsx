import React, { useEffect, useState } from 'react';
import { getProducto } from '../../listaProductos/ListaProductos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'

const ItemDetailContainer = () => {

const [producto, setProducto] = useState({});

const { idProd } = useParams();

useEffect(() => {
    getProducto(parseInt(idProd))
        .then((res) => {
            setProducto(res);
        })
        .catch((error) => {
            console.log(error);
        });
}, [idProd]);

    return (
        <div className="estiloItemDetailContainer">
            <ItemDetail producto = {producto} />
        </div>
    );
};

export default ItemDetailContainer;