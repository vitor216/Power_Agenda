import styled from 'styled-components'
import Variaveis from '../../styles/Variaveis'
import { Botao } from '../../styles'

import * as enums from '../../Utils/enums/Contatos'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCordeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.EMERGENCIA)
      return Variaveis.vermelho
    if (props.prioridade === enums.Prioridade.FAVORITOS)
      return Variaveis.amarelo2
  } else {
    if (props.status === enums.Status.ATIVO) return Variaveis.verde
    if (props.status === enums.Status.BLOQUEADO) return Variaveis.vermelho
  }

  return Variaveis.azul
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
  }
`

export const Titulo = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  line-height: 24px;
  display: block;
  resize: none;
  border: none;
  background-color: transparent;
  margin-top: 25px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCordeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgbd(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${Variaveis.vermelho};
`
