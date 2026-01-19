import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nome: "Tamagochi",
    fome: 50, 
    energia: 50,
    felicidade: 50,
    cliques: 0,
    sprite: 'Ovo_normal.gif'
}

const tamagochiSlice = createSlice({
    name: 'tamagochi',
    initialState, 
    reducers:{
        usarItem: (state, actions) =>{
            state.fome += actions.payload.fome
            state.felicidade += actions.payload.felicidade
            state.energia += actions.payload.energia
            state.cliques +=1;
        },
        alterarNome: (state, actions) =>{
            state.nome = actions.payload;
        },
        alterarSprite: (state, actions) =>{
            state.sprite = actions.payload;
        },
        redefinir: (state) =>{
            Object.assign(state, initialState);
        },
        incrementar: (state) =>{
            state.cliques += 1;
        }

    }
});

export const {usarItem, alterarSprite, redefinir, incrementar} = tamagochiSlice.actions;
export default tamagochiSlice.reducer;

