import FormularioTarefas from '../../containers/FormularioTarefas'
import * as S from './styles'

const CadastroTarefas = () => (
  <>
    <S.container>
      <S.header>
        <S.titulo>Nova Tarefa</S.titulo>
        <S.logo src="./logo2.png" alt="Logo da Power Agenda" />
      </S.header>
      <FormularioTarefas />
      <S.footer>
        <h2>&copy;FALCONtechnology-Todos os Direitos Reservados-2023</h2>
      </S.footer>
    </S.container>
  </>
)

export default CadastroTarefas
