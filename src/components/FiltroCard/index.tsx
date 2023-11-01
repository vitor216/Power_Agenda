import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../Utils/enums/Contatos'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'Prioridade' | 'Status' | 'Todos'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificarEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'Todos') return contatos.itens.length
    if (criterio === 'Prioridade') {
      return contatos.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'Status') {
      return contatos.itens.filter((item) => item.status === valor).length
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

  const contador = contarContatos()
  const ativo = verificarEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
