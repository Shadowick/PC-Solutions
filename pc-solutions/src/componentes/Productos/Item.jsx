import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className="Item">
            <img src={producto.img} alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <h4 className="info-price">${producto.price}.-</h4>
                <Link to={`/detail/${producto.id}`}>Más Información</Link>
            </article>
        </div>
    );
};

export default Item;