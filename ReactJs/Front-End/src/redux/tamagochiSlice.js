import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nome: "Tamagochi",
    fome: 50, 
    energia: 50,
    felicidade: 50,
    cliques: 0,
    sprite: 0
}

const tamagochiSlice = createSlice({
    name: 'tamagochi',
    initialState, 
    reducers:{
        alimentar: (state, actions) =>{
            state.fome = Math.max(0, state.fome - 10);
            state.felicidade += 5;
            state.cliques +=1;
        },
        descansar: (state, actions) =>{
            state.energia = Math.min(100, state.energia + 30);
            state.cliques += 1;
            state.fome = Math.min(100, state.fome + 20);
        },
        brincar: (state, actions) =>{
            state.felicidade = Math.min(100, state.felicidade + 30);
            state.cliques += 1;
            state.energia = Math.max(0, state.energia - 20);
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
        incrementar: state =>{
            state.value += 1;
        }

    }
});

export const {alimentar, descansar, brincar, alterarSprite, redefinir, incrementar} = tamagochiSlice.actions;
export default tamagochiSlice.reducer;

