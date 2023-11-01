import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import EstiloGlobal, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Tarefas from './pages/Tarefas'
import PageContato from './pages/Contatos'
import CadastrodeContatos from './pages/Cadastro'
import CadastrodeTarefas from './pages/CadastroTarefas'
import Calendario from './pages/Calendario'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Tarefas',
    element: <Tarefas />
  },
  {
    path: '/Contatos',
    element: <PageContato />
  },
  {
    path: '/Cadastro',
    element: <CadastrodeContatos />
  },
  {
    path: '/CadastroTarefas',
    element: <CadastrodeTarefas />
  },
  {
    path: '/Calendario',
    element: <Calendario />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
