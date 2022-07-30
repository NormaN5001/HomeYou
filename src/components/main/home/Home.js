import React from 'react'
import * as S from './Styles'

import HouseHome from '../../../img/house1.png'

export default function Home(){

  return(
    <>
      <S.HomeSection>
        <S.Left>
          <S.TitleBox>Ajudar você a encontrar o melhor conforto, é nossa prioridade.</S.TitleBox>
          <S.Text>Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência</S.Text>
          <S.DivButtons>
            <S.Button>Entre em contato</S.Button>
            <S.Link href="#">Mais sobre nós</S.Link>
          </S.DivButtons>
        </S.Left>
        <S.Image src={HouseHome} alt="Imagem de uma casa"/>
      </S.HomeSection>
    </>
  )
}