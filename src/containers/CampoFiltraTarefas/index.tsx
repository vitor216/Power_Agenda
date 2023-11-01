import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import * as enums from '../../Utils/enums/Tarefas'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro2'
import { Campo } from '../../styles'
import FiltroCard2 from '../../components/FiltroCard2'

const CampoFiltraTarefas = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro2)

  return (
    <div>
      <>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Botao onClick={() => navigate('/')}>Voltar a Home</S.Botao>
        <S.Botao onClick={() => navigate('/CadastroTarefas')}>
          Nova Tarefa
        </S.Botao>
        <S.Filtros>
          <FiltroCard2
            valor={enums.Status.PENDENTE}
            criterio="Status"
            legenda="Pendente"
          />
          <FiltroCard2
            valor={enums.Status.CONCLUIDA}
            criterio="Status"
            legenda="Comcluídas"
          />
          <FiltroCard2
            valor={enums.Prioridade.URGENTE}
            criterio="Prioridade"
            legenda="Urgente"
          />
          <FiltroCard2
            valor={enums.Prioridade.IMPORTANTE}
            criterio="Prioridade"
            legenda="Importante"
          />
          <FiltroCard2
            valor={enums.Prioridade.NORMAL}
            criterio="Prioridade"
            legenda="normal"
          />
          <FiltroCard2 criterio="Todas" legenda="Todas" />
        </S.Filtros>
      </>
    </div>
  )
}
export default CampoFiltraTarefas
