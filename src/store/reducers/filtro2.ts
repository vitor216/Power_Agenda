import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../Utils/enums/Tarefas'

type FiltroState2 = {
  termo?: string
  criterio: 'Prioridade' | 'Status' | 'Todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState2 = {
  termo: '',
  criterio: 'Todas'
}

const filtroSlice = createSlice({
  name: 'filtro2',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState2>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
