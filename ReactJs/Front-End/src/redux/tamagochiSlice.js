import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    nome: Tamagochi,
    fome: 50, 
    energia: 50,
    felicidade: 50,
    cliques: 50,
    sprite: 1
}

const tamagochiSlice = createSlice({
    name: 'tamagochi',
    initialState, 
    reducers:{
        alimentar: (state) =>{
            state.fome = Math.max(0, state.fome - 10);
            state.felicidade += 5;
            state.cliques +=1;
        },
        descansar: (state) =>{
            state.energia = Math.min(100, state.energia + 30);
            state.cliques += 1;
            state.fome = Math.min(100, state.fome + 20);
        },
        brincar: (state) =>{
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
        }

    }
});

export const {alimentar, descansasr, brincar, redefinir} = tamagochiSlice.actions;
export default tamagochiSlice.reducer;

