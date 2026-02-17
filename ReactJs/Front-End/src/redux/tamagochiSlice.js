import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react';

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

            if(actions.payload.fome < 0){
                state.fome = Math.max(0, (state.fome + actions.payload.fome));
            }
            else state.fome = Math.min(100, (state.fome + actions.payload.fome));

            if(actions.payload.energia < 0){
                state.energia = Math.max(0, (state.energia + actions.payload.energia));
            }
            else state.energia = Math.min(100, (state.energia + actions.payload.energia));
            
            if(actions.payload.felicidade < 0){
                state.felicidade = Math.max(0, (state.felicidade + actions.payload.felicidade));
            }
            else state.felicidade = Math.min(100, (state.felicidade + actions.payload.felicidade));

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
        carregarTamagochi: (state, actions) =>{
            const {nome, fome, energia, felicidade, cliques, sprite} = actions.payload;

            state.nome = nome;
            state.fome = fome;
            state.energia = energia;
            state.felicidade = felicidade;
            state.cliques = cliques;
            state.sprite = sprite;

        },
        incrementar: (state) =>{
            state.cliques += 1;
        }

    }
});

export const {usarItem, alterarSprite, redefinir, incrementar} = tamagochiSlice.actions;
export default tamagochiSlice.reducer;

