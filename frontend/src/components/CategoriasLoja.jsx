import './CategoriasLoja.css'

const CategoriasLoja = (props) => {



    return(
        <button className="categoriasLoja" onClick={() => props.onClick(props.tipo)}>
            <a className="textCategoriasLoja">{props.nomeCategoria}</a>
        </button>
    );

}

export default CategoriasLoja