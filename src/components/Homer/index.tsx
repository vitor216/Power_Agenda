import { Link } from 'react-router-dom'
import * as S from './styles'
const Homer = () => {
  return (
    <S.container>
      <S.header>
        <S.titulo>
          <S.span>Power</S.span> Agenda
        </S.titulo>
        <S.logo src="./logo2.png" alt="Logo da Power Agenda" />
      </S.header>
      <S.main>
        <Link to="/Contatos">
          <S.img src="./contato.png" alt="icone de Contatos" />
        </Link>

        <Link to="/Calendario">
          <S.img src="./calendario.png" alt="icone de Calendario" />
        </Link>

        <Link to="/Tarefas">
          <S.img src="./tarefas.png" alt="icone de Tarefas" />
        </Link>
      </S.main>
      <S.footer>
        <h2>&copy;FALCONtechnology-Todos os Direitos Reservados-2023</h2>
      </S.footer>
    </S.container>
  )
}

export default Homer
