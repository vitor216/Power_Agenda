import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro2'
import * as enums from '../../Utils/enums/Tarefas'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'Prioridade' | 'Status' | 'Todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard2 = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro2, tarefas } = useSelector((state: RootReducer) => state)

  const verificarEstaAtivo = () => {
    const mesmoCriterio = filtro2.criterio === criterio
    const mesmoValor = filtro2.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'Todas') return tarefas.itens.length
    if (criterio === 'Prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'Status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificarEstaAtivo()

  return (
    <S.CardTarefa ativo={ativo} onClick={filtrar}>
      <S.ContadorTarefa>{contador}</S.ContadorTarefa>
      <S.LabelTarefa>{legenda}</S.LabelTarefa>
    </S.CardTarefa>
  )
}

export default FiltroCard2
