import './MenuLateral.css'
import MenuLateralSwiper from './MenuLateralSwiper'

function MenuLateral(props){

    return(
        <div className={`Principal ${props.blur? 'blurred' : ''}`}>
            <div className='NomeMenu'>
                <h2>{props.menu}</h2>
            </div>
            <div className='Elementos'>
                <MenuLateralSwiper></MenuLateralSwiper>
            </div>
            <div className='Rodape'>

            </div>
        </div>

    );

}

export default MenuLateral