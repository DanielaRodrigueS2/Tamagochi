import './MenuItensLoja.css'
import {useState, useEffect} from 'react'

const MenuItensLoja = (props) =>{

    const itens = props.itens;

    return(
        <div className="MenuItens">
            <div className="Itens">
                {item.map((item) =>(
                    <img
                        src={`/Itens/${item.tipo}/${item.sprite}`}
                        onClick={props.comprarItem(item)}
                        className="Item"
                    />
                ))}

            </div>
        </div>
    )

}

export default MenuItensLoja