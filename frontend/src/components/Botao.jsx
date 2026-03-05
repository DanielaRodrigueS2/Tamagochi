import './Botao.css'

function Botao({Icon,onClick}){
    
    return(
        <button onClick={onClick} className="Botao">
            {Icon && <Icon size={24}/>}
        </button>


    );

}

export default Botao