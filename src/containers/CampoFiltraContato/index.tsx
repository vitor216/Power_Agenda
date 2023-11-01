import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../Utils/enums/Contatos'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import { Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

const CampoFiltraContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

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
        <S.Botao onClick={() => navigate('/Cadastro')}>Novo Contato</S.Botao>
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.ATIVO}
            criterio="Status"
            legenda="Ativo"
          />
          <FiltroCard
            valor={enums.Status.BLOQUEADO}
            criterio="Status"
            legenda="Bloqueado"
          />
          <FiltroCard
            valor={enums.Prioridade.EMERGENCIA}
            criterio="Prioridade"
            legenda="Emergencia"
          />
          <FiltroCard
            valor={enums.Prioridade.FAVORITOS}
            criterio="Prioridade"
            legenda="Favoritos"
          />
          <FiltroCard
            valor={enums.Prioridade.NORMAL}
            criterio="Prioridade"
            legenda="Normal"
          />
          <FiltroCard
            valor={enums.Prioridade.MEU}
            criterio="Prioridade"
            legenda="Meus-Contatos"
          />
          <FiltroCard criterio="Todos" legenda="Todos" />
        </S.Filtros>
      </>
    </div>
  )
}
export default CampoFiltraContato
