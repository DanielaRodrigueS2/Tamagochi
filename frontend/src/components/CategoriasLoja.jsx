import './CategoriasLoja.css'

const CategoriasLoja = (props) => {

    return(
        <button type='button' className="categoriasLoja" onClick={() => props.onClick(props.tipo)}>
            {props.nomeCategoria}
        </button>
    );

}

export default CategoriasLoja