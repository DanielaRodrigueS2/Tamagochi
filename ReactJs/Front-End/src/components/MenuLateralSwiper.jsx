import './MenuLateralSwiper.css'
import {DndContext, closestCorners} from '@dnd-kit/core'
import { useDraggable } from '@dnd-kit/core';
// Mudar para Grid

function MenuLateralSwiper(props){
    
    const itens = props.itens
    console.log('Itens recebidos: ', itens);

    
    return(
        <div className='Drag'>
            <DndContext collisionDetection={closestCorners} className="DndMenu">
                {itens.map((item) => (
                    <div key={item._id} className='ItensMenu'>
                        <img src={`/Itens/${item.tipo}/${item.sprite}`} alt={item.nome} className='imagem'/>
                    </div>
                ))}
            </DndContext>
        </div>
    );
}

export default MenuLateralSwiper