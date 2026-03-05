import { configureStore } from "@reduxjs/toolkit";
import tamagochiReducer from "./tamagochiSlice";

export const store = configureStore({
    reducer:{
        tamagochi: tamagochiReducer
    }
});