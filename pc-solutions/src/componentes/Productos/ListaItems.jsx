import React from 'react';
import Item from './Item';

const ListaItems = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((producto) => {
                return <Item producto={producto} key={producto.id} />;
            })}
        </div>
    );
};

export default ListaItems;