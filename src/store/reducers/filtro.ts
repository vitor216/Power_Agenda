import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../Utils/enums/Contatos'

type FiltroState = {
  termo?: string
  criterio: 'Prioridade' | 'Status' | 'Todos'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'Todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
