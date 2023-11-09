import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'
import * as enums from '../../Utils/enums/Contatos'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Vitor',
      prioridade: enums.Prioridade.MEU,
      status: enums.Status.ATIVO,
      email: 'vitor@gmail.com',
      telefone: '(21) 11111-1111',
      phone: '(21) 11111-1111',
      observacao: '123'
    },
    {
      id: 2,
      nome: 'Naira',
      prioridade: enums.Prioridade.FAVORITOS,
      status: enums.Status.BLOQUEADO,
      email: 'naira@gmail.com',
      telefone: '(21) 22222-2222',
      phone: '(21) 22222-2222',
      observacao: '456'
    },
    {
      id: 3,
      nome: 'Nicolas',
      prioridade: enums.Prioridade.FAVORITOS,
      status: enums.Status.ATIVO,
      email: 'nicolas@gmail.com',
      telefone: '(21) 33333-3333',
      phone: '(21) 33333-3333',
      observacao: '789'
    },
    {
      id: 4,
      nome: 'Policia',
      prioridade: enums.Prioridade.EMERGENCIA,
      status: enums.Status.ATIVO,
      email: '',
      telefone: '(21) 44444-4444',
      phone: '(21) 44444-4444',
      observacao: '987'
    },
    {
      id: 5,
      nome: 'Bombeiros',
      prioridade: enums.Prioridade.EMERGENCIA,
      status: enums.Status.ATIVO,
      email: '',
      telefone: '(21) 55555-5555',
      phone: '(21) 55555-5555',
      observacao: '654'
    },
    {
      id: 6,
      nome: 'Hospital',
      prioridade: enums.Prioridade.EMERGENCIA,
      status: enums.Status.ATIVO,
      email: 'RedeDor@yahoo.com.br',
      telefone: '(21) 66666-6666',
      phone: '(21) 66666-6666',
      observacao: '321'
    },
    {
      id: 7,
      nome: 'Ana',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.ATIVO,
      email: 'Ana@gmail.com',
      telefone: '(21) 77777-7777',
      phone: '(21) 77777-7777',
      observacao: '741'
    },
    {
      id: 8,
      nome: 'Carla',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.BLOQUEADO,
      email: 'carla@gmail.com',
      telefone: '(21) 88888-8888',
      phone: '(21) 88888-8888',
      observacao: '852'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (n) => n.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (n) => n.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].status = action.payload.finalizado
          ? enums.Status.ATIVO
          : enums.Status.BLOQUEADO
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions

export default contatosSlice.reducer
