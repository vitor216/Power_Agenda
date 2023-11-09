import { ChangeEventHandler, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, MainContainer, BotaoCancelar } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../Utils/enums/Contatos'
import { cadastrar } from '../../store/reducers/contatos'
import InputMask from 'react-input-mask'

function PhoneInput(props: {
  value: string | number | readonly string[] | undefined
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
}) {
  return (
    <InputMask
      mask="(99) 99999-9999"
      style={{
        backgroundColor: '#fff',
        color: '#666666',
        padding: '8px',
        borderRadius: '8px',
        fontWeight: 'bold',
        borderColor: '#666666',
        width: '100%'
      }}
      value={props.value}
      onChange={props.onChange}
      placeholder="Phone"
    ></InputMask>
  )
}

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [observacao, setObservacao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        prioridade,
        observacao,
        telefone,
        phone,
        email,
        status: enums.Status.ATIVO
      })
    )
    navigate('/Contatos')
  }

  return (
    <MainContainer>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          as="textarea"
          placeholder="Nome"
          required
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          as="textarea"
          placeholder="email"
        />
        <Campo
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          as="textarea"
          placeholder="telefone"
          required
        />

        <PhoneInput
          value={phone}
          onChange={(evento) => setPhone(evento.target.value)}
        />

        <Campo
          value={observacao}
          onChange={(evento) => setObservacao(evento.target.value)}
          as="textarea"
          placeholder="Observação"
        />
        <Opcoes>
          <p>Prioredade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        <BotaoCancelar onClick={() => navigate('/Contatos')}>
          Cancelar
        </BotaoCancelar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
