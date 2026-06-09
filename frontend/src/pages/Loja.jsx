import "./Loja.css"
import { useState, useEffect } from "react"
import Item from "../components/Item"
import CategoriasLoja from "../components/CategoriasLoja"
import MenuItensLoja from "../components/MenuItensLoja"
import { useSelector, useDispatch } from "react-redux"
import {alterarDinheiro, comprarItem} from '../redux/tamagochiSlice'
import {useNavigate} from 'react-router-dom'

function Loja(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dinheiro = useSelector(state => state.tamagochi.dinheiro);
    const itens = JSON.parse(localStorage.getItem('itens'));
    const [itensAtivos, setItensAtivos] = useState([]);
    const [tipo, setTipo] = useState(0);

    const listaTemporaria = async (tipo) =>{
        let lista = [];
        for (let i = 0; i < itens.length; i++){
            if(itens[i].tipo === tipo) lista.push(itens[i])
        }

        setItensAtivos(lista);
    }

    useEffect(() => {
        console.log('ItensLoja', itens);
        if ( !itens ) return;

        listaTemporaria(tipo)
        console.log(listaTemporaria);

    }, [tipo])

    const alteraTipo = (tipo) => {
        setTipo(tipo);
        console.log(tipo);
    };

    const comprarItemF = (item) =>{
        console.log('Item compra:' , item)
        if(dinheiro >= item.preco){
            dispatch(comprarItem({
                preco: item.preco,
                quantidade: 1,
                _id: item._id
            }))
            console.log('Item comprado com sucesso');
        }
    };

    return(
        <div className="Loja">

            <header>
                <div className="header-text">
                    <p>Loja de itens</p>
                </div>

                <div className="dinheiro">
                    <img src="extras/melancia.gif" className="img-melancia"></img>
                    <p>{dinheiro}</p>
                </div>
            </header>   

            <main>
                <div className="categorias">
                    <CategoriasLoja nomeCategoria="Roupas"  tipo={0} onClick = {alteraTipo} />
                    <CategoriasLoja nomeCategoria="Brinquedos" tipo={2} onClick = {alteraTipo} />
                    <CategoriasLoja nomeCategoria="Comida" tipo={1}  onClick = {alteraTipo} />
                </div>

                <div className="main-itens">
                    <MenuItensLoja itens={itensAtivos} comprarItem={comprarItemF}/>
                </div>
            </main>

            <footer>
                <img></img>
                <button type="button" className="botao-voltar" onClick={() => navigate('/')}>Voltar</button>
                <img></img>
            </footer>
        </div>
    )

}

export default Loja