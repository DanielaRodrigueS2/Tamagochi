import "./Loja.css"
import { useState, useEffect } from "react"
import Item from "../components/Item"
import CategoriasLoja from "../components/CategoriasLoja"
import MenuLaeralSwipper from "../components/MenuLateralSwiper"
import { useSelector, useDispatch } from "react-redux"

function Loja(){

    const [valor, setValor] = useState(0)
    const dispatch = useDispatch();
    const dinheiro = useSelector(state => state.tamagochi.dinheiro);
    const itens = localStorage.getItem('itens');
    const [itensAtivos, setItensAtivos] = useState([]);
    const [tipo, setTipo] = useState(0);

    const listaTemporaria = async (tipo) =>{
        let lista = [];
        for (let i = 0; i <= itens.lenght; i++){
            if(itens[i].tipo === tipo) lista.push(itens[i])
        }

        setItensAtivos(lista);
    }

    useEffect(() => {
        if ( !itens ) return;

        listaTemporaria(tipo)

    }, [tipo])

    const alteraTipo = (tipo) => setTipo(tipo);

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
                    <CategoriasLoja nomeCategoria="Roupas"  tipo={0} onClick = {alteraTipo} />
                    <CategoriasLoja nomeCategoria="Brinquedos" tipo={2} onClick = {alteraTipo} />
                    <CategoriasLoja nomeCategoria="Comida" tipo={1}  onClick = {alteraTipo} />
                </div>

                <div className="main-itens">
                    <MenuLaeralSwipper itens={itensAtivos}/>
                </div>
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