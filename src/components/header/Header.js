import React from 'react'
import * as S from './Styles'

import HearthImg from '../../img/coracao.png'
import SearchImg from '../../img/lupa.png'

export default function Header(){

  return(
    <>
      <S.HeaderSection>
        <S.Left>
          <S.Logo></S.Logo>
          <p>HOMEYOU</p>
        </S.Left>

        <S.Right>
          <S.Navegation>
            <ul>
              <li>Início</li>
              <li>Galeria</li>
              <li>Contato</li>
            </ul>
          </S.Navegation>
          <S.Icons>
            <img src={HearthImg} alt="Ícone de um coração"/>
            <img src={HearthImg} alt="Ícone de um coração"/>
            <img src={SearchImg} alt="Ícone de uma lupa"/>
          </S.Icons>
        </S.Right>
      </S.HeaderSection>
    </>
  )
}