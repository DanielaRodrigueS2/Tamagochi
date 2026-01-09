import './MenuLateralSwiper.css'
import {DndContext, closestCorners} from '@dnd-kit/core'
import Item from './Item';
// Mudar para Grid

function MenuLateralSwiper(props){
    
    const itens = props.itens
    console.log('Itens recebidos: ', itens);

    
    return(
        <div className='Drag'>
            <DndContext collisionDetection={closestCorners} className="DndMenu">
                {itens.map((item) => (
                    <Item key={item._id} item={item}/>
                ))}
            </DndContext>
        </div>
    );
}

export default MenuLateralSwiper