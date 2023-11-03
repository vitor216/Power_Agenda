import { useState, useEffect, ChangeEvent } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import Contatoclass from '../../models/Contatos'
import { Botao, BotaoSalvar } from '../../styles'
import * as enums from '../../Utils/enums/Contatos'

type Props = Contatoclass

const Contato = ({
  observacao: observacaoOriginal,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  prioridade,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setestaEditando] = useState(false)

  const [observacao, setObservacao] = useState('')
  const [nome, setnome] = useState('')
  const [email, setemail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (observacaoOriginal.length > 0) {
      setObservacao(observacaoOriginal)
    }
  }, [observacaoOriginal])

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setnome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setemail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  function cancelarEdicao() {
    setestaEditando(false)
    setObservacao(observacaoOriginal)
    setnome(nomeOriginal)
    setemail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }
  return (
    <S.Card>
      <label htmlFor={nome}>
        <input
          type="checkbox"
          id={nome}
          checked={status === enums.Status.ATIVO}
          onChange={alteraStatusContato}
        />
        <S.Titulo
          disabled={!estaEditando}
          value={nome}
          onChange={(evento) => setnome(evento.target.value)}
        />
      </label>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setemail(evento.target.value)}
      />
      <S.Descricao
        disabled={!estaEditando}
        value={observacao}
        onChange={(evento) => setObservacao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    observacao,
                    prioridade,
                    status,
                    nome,
                    id,
                    telefone,
                    email
                  })
                )
                setestaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setestaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
