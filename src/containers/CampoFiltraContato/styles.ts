import styled from 'styled-components'
import Variaveis from '../../styles/Variaveis'

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${Variaveis.azulescuro};
  border-radius: 8px;
  margin-left: 250px;
  margin-top: 10px;
`
