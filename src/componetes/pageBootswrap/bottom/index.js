import React from 'react'
import './index.css'
import insta from './instagram.jpg'
import facebook from './facebook.png'
function Bottom() {



    return (
        <div className="bottom" >
            <acima>
                <ol>
                    <li><img src={facebook} alt="rede social"></img></li>
                    <li><img src={insta} alt="rede social"></img></li>
                </ol>
            </acima>
            <abaixo>
                <h3>mara mara station</h3>
                <p>todos os direitos reservados</p>
                <p>Email: atendimento@mmstation.com | telefone: 98982-2121</p>
                <p>razão social: 1892728928.282-828</p>
            </abaixo>
        
        </div>
    )
}

export default Bottom