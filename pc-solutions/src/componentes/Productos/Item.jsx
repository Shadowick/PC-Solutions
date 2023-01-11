import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="item">
            <img src={producto.img} width="200px" alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <h4 className="info-price">{producto.price}.-</h4>
                <Link to={`/detail/${producto.id}`}>Ver Detalle</Link>
            </article>
        </div>
    );
};

export default Item;