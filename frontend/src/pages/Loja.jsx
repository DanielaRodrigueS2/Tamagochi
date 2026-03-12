import "./Loja.css"
import { useState } from "react"

function Loja(){

    const [valor, setValor] = useState(0)

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
                    <div>

                    </div>
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