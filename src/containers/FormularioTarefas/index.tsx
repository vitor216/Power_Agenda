import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, BotaoCancelar } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../Utils/enums/Tarefas'
import { cadastrar } from '../../store/reducers/tarefas'

const FormularioTarefas = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
          required
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
          required
        />
        <Opcoes>
          <p>Prioredade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <BotaoCancelar onClick={() => navigate('/Tarefas')}>
          Cancelar
        </BotaoCancelar>
      </Form>
    </MainContainer>
  )
}

export default FormularioTarefas
