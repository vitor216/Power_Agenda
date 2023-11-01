import Formulario from '../../containers/Formulario'
import * as S from './styles'
const Cadastro = () => (
  <>
    <S.container>
      <S.header>
        <S.titulo>Novo Contato</S.titulo>
        <S.logo src="./logo2.png" alt="Logo da Power Agenda" />
      </S.header>
      <Formulario />
      <S.footer>
        <h2>&copy;FALCONtechnology-Todos os Direitos Reservados-2023</h2>
      </S.footer>
    </S.container>
  </>
)

export default Cadastro
