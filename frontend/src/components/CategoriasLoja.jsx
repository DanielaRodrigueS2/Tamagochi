import './CategoriasLoja.css'

const CategoriasLoja = (props) => {
        return(
            <div className="categoriasLoja">
                <Text className="textCategoriasLoja">{props.nomeCategoria}</Text>
            </div>
        )

}

export default CategoriasLoja