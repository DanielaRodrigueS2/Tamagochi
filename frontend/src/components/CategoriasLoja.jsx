import './CategoriasLoja.css'

const CategoriasLoja = (props) => {
        return(
            <button className="categoriasLoja">
                <a className="textCategoriasLoja">{props.nomeCategoria}</a>
            </button>
        )

}

export default CategoriasLoja