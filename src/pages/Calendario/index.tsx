import Calendario from '../../components/Calendario'
import * as S from './styles'
const PageContato = () => (
  <>
    <S.container>
      <S.header>
        <S.Titulo>Calendario</S.Titulo>
        <S.logo src="./logo2.png" alt="Logo da Power Agenda" />
      </S.header>
      <Calendario />
      <S.footer>
        <h2>&copy;FALCONtechnology-Todos os Direitos Reservados-2023</h2>
      </S.footer>
    </S.container>
  </>
)

export default PageContato
