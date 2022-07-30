import styled from 'styled-components'

export const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 900px;
  @media(max-width: 900px){
    height: 400px;
    justify-content: center;
  }
`
export const Left = styled.div`
  width: 40vw;
  @media(max-width: 900px){
    width: 80%;
    border: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media(max-width: 500px){
    width: 95%;
  }
`
export const TitleBox = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #272727;
  @media(max-width: 1100px){
    font-size: 2rem;
  }
  @media(max-width: 900px){
    text-align: center; 
    font-size: 1.7rem;
  }
`
export const Text = styled.p`
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  color: #797979;
  width: 30vw;
  @media(max-width: 1100px){
    font-size: 1rem;
  }
  @media(max-width: 900px){
    width: 100%;
    text-align: center; 
    font-size: 0.8rem;
  }
`
export const DivButtons = styled.div`
  
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
  @media(max-width: 1100px){
    font-size: 1rem;
    width: 160px;
    height: 40px;
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
  @media(max-width: 1100px){
    margin-left: 30px;
    font-size: 1rem;
  }
`
export const Image = styled.img`
  width: 700px;
  height: 900px;
  @media(max-width: 1440px){
    width: 500px;
    height: 700px;
  }
  @media(max-width: 900px){
    display: none;
  }
`