import './MenuLateral.css'

function MenuLateral(props){

    return(
        <div className={`Principal ${props.blur? 'blurred' : ''}`}>
            <div className='NomeMenu'>
                <h2>{props.menu}</h2>
            </div>
            <div className='Elementos'>

            </div>
            <div className='Rodape'>

            </div>
        </div>

    );

}

export default MenuLateral