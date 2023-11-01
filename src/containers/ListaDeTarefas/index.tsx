import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro2
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (itens) => itens.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'Prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (itens) => itens.prioridade === valor
        )
      } else if (criterio === 'Status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (itens) => itens.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'Todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${`${criterio}=${valor}`}" ${complementacao}`
    }

    return mensagem
  }
  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltrage(tarefas.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
