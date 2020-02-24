import React from 'react';
import './index.css';
import carrinho from './carrinho.jpg'

function Navbar() {
    

    return (
        <div id="barra">
            
            <compra> 
                 <img src={carrinho} alt="carrinho"></img>
                    <span>{1+100}</span>
            </compra>
            <h3>Station Mara Mara</h3>
            
        </div>
    )
}

export default Navbar