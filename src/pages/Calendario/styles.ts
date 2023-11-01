import styled from 'styled-components'
import Variaveis from '../../styles/Variaveis'

export const Titulo = styled.h1`
  text-align: center;
  margin-left: 300px;
  font-size: 66px;
`
export const logo = styled.img`
  width: 100px;
`
export const header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(red, white);
  border-bottom: 1px solid ${Variaveis.vermelho};
`
export const container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-top: 3px;
  border: 2px solid #000;
`
export const footer = styled.footer`
  text-align: center;
  border-top: 1px solid ${Variaveis.vermelho};
  background-color: #000;

  h2 {
    background-image: linear-gradient(to bottom, red, white);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    font-size: 15px;
  }
`
