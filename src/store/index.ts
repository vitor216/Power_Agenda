import { configureStore } from '@reduxjs/toolkit'
import contatos from './reducers/contatos'
import tarefas from './reducers/tarefas'
import filtroReducer from './reducers/filtro'
import filtroReducer2 from './reducers/filtro2'

const store = configureStore({
  reducer: {
    contatos: contatos,
    tarefas: tarefas,
    filtro: filtroReducer,
    filtro2: filtroReducer2
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
