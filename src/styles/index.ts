import styled, { createGlobalStyle } from 'styled-components'
import Variaveis from './Variaveis'

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  paddiig: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}
`
export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 63.7vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
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
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${Variaveis.verde};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${Variaveis.vermelho};
`
export default EstiloGlobal
