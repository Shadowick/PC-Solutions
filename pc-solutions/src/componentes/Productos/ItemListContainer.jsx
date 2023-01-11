import React, { useEffect, useState } from 'react';
import { getProductos } from '../../listaProductos/ListaProductos';
import ListaItems from './ListaItems';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    // const valor = useParams();
    // console.log(valor.categoryName);

    const { categoryName } = useParams();

    useEffect(() => {
        getProductos(categoryName)
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

    return (
        <div className="container">
            <ListaItems items={items} />
        </div>
    );
};

export default ItemListContainer;