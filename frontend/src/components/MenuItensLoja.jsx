import './MenuItensLoja.css'
import {useState, useEffect} from 'react'

const MenuItensLoja = (props) =>{

    const itens = props.itens;

    return(
        <div className="MenuItens">
            <div className="Itens">
                {itens.map((item) =>(
                    <img
                        src={`/Itens/${item.tipo}/${item.sprite}`}
                        onClick={props.comprarItem(item)}
                        className="Item"
                        key={item._id}
                    />
                ))}

            </div>
        </div>
    )

}

export default MenuItensLoja