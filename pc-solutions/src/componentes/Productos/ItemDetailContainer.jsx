import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    useParams();

    return (
        <div className="estiloItemDetailContainer">
            <ItemDetail />
        </div>
    );
};

export default ItemDetailContainer;