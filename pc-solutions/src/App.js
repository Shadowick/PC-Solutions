import React from "react";
/* import { Header } from "./componentes/Header"; */
import { NavBar } from "./componentes/Header/NavBar"
import { ProductosLista } from "./componentes/Productos/ItemListContainer";
import 'boxicons';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductosLista />
    </div>
  );
}

export default App;
