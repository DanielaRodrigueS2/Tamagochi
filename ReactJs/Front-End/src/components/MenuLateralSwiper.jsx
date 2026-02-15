import './MenuLateralSwiper.css'
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