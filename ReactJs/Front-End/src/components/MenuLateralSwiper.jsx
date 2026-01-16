import './MenuLateralSwiper.css'
import {DndContext, closestCorners} from '@dnd-kit/core'
import Item from './Item';
// Mudar para Grid

function MenuLateralSwiper(props){
    
    const itens = props.itens
    console.log('Itens recebidos: ', itens);

    
    return(
        <div className='Drag'>
            <div className="DndMenu">
                <div className='ItensMenu'>
                    {itens.map((item) => (
                        <Item key={item._id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MenuLateralSwiper