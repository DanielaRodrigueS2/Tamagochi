import "./Loja.css"
import { useState } from "react"
import CategoriasLoja from "../components/CategoriasLoja"
import { useSelector, useDispatch } from "react-redux"

function Loja(){

    const [valor, setValor] = useState(0)
    const dispatch = useDispatch();
    const dinheiro = useSelector(state => state.tamagochi.dinheiro);

    return(
        <div className="Loja">

            <header>
                <div className="header-text">
                    <p>Loja de itens</p>
                </div>

                <div className="dinheiro">
                    <img src="extras/melancia.gif" className="img-melancia"></img>
                    <p>{valor}</p>
                </div>
            </header>   

            <main>
                <div className="categorias">
                    <CategoriasLoja nomeCategoria="Roupas" />
                    <CategoriasLoja nomeCategoria="Brinquedos" />
                    <CategoriasLoja nomeCategoria="Comida" />
                </div>

                <div className="main-itens"></div>
            </main>

            <footer>
                <img></img>
                <button type="button" className="botao-voltar">Voltar</button>
                <img></img>
            </footer>
        </div>
    )

}

export default Loja