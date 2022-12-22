
/* -----------------SIN BOOTSTRAP----------------- */

import React from 'react'
import Logopcsolutions from "../../img/logo-pc-solutions.png";


export const Header =() => {
    return (
        <header>
            <a href='#'>
                <div className='logo'>
                    <img class="imgLogo" src={Logopcsolutions} alt='#'/>
                </div>
            </a>
            <ul>
                <li>
                    <a href='#'>Inicio</a>
                </li>
                <li>
                    <a href='#'>Productos</a>
                </li>
            </ul>
            <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>3</span>
            </div>
        </header>

    )
}