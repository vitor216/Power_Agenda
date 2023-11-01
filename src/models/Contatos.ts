import * as enums from '../Utils/enums/Contatos'

class Contato {
  prioridade: enums.Prioridade
  status: enums.Status
  nome: string
  id: number
  email: string
  telefone: string
  observacao: string

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    email: string,
    id: number,
    telefone: string,
    observacao: string
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.status = status
    this.email = email
    this.telefone = telefone
    this.id = id
    this.observacao = observacao
  }
}

export default Contato
