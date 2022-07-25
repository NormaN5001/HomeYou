import styled from 'styled-components'

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 900px;
`
export const Left = styled.div`
  width: 40vw;
`
export const TitleBox = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #272727;
`
export const Text = styled.p`
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #797979;
  width: 30vw;
`
export const Button = styled.button`
  margin-top: 20px;
  background-color: #272727;
  border-style: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: #FFF;
  width: 225px;
  height: 46px;
  transition: 0.7s;
  &:hover{
    cursor: pointer;
    color: grey;
  }
`
export const Link = styled.a`
  margin-left: 50px;
  font-size: 1.3rem;
  font-weight: 500;
  color: #272727;
  transition: 0.7s;
  &:hover{
    color: grey;
  }
`
export const Image = styled.img`
  width: 700px;
  height: 900px;
  @media(max-width: 1440px){
    width: 500px;
    height: 700px;
  }
`