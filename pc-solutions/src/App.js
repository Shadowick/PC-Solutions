import React from "react";
import NavBar from './componentes/Header/NavBar';
import ItemListContainer from './componentes/Productos/ItemListContainer';
import ItemDetailContainer from './componentes/Productos/ItemDetailContainer';
import Carrito from './componentes/Cart/Carrito';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/categoria/:categoryName"
                    element={<ItemListContainer />}
                />
                <Route
                    path="/detail/:idProd"
                    element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Carrito />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
