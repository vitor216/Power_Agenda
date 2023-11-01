import CampoFiltraTarefas from '../../containers/CampoFiltraTarefas'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import * as S from './styles'

const PageTarefas = () => (
  <>
    <S.container>
      <S.header>
        <S.Titulo>Tarefas</S.Titulo>
        <S.logo src="./logo2.png" alt="Logo da Power Agenda" />
      </S.header>
      <CampoFiltraTarefas />
      <ListaDeTarefas />
      <S.footer>
        <h2>&copy;FALCONtechnology-Todos os Direitos Reservados-2023</h2>
      </S.footer>
    </S.container>
  </>
)

export default PageTarefas
