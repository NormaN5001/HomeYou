import styled from 'styled-components'
import LogoImg from '../../img/logo.png'

export const HeaderSection = styled.section`
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Left = styled.section`
  display: flex;
  align-items: center;
  p{
    margin-left: 10px;
    color: #272727;
    font-weight: 600;
    font-size: 18px;
  }
`
export const Right = styled.section`
  display: flex;
  align-items: center;
`
export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #272727;
  width: 43px;
  height: 43px;
`
export const Navegation = styled.nav`
  ul{
    display: flex;
    list-style: none;
    @media(max-width: 768px){
      
    }
  }
  ul li{
    cursor: pointer;
    margin-left: 40px;
    color: #272727;
    font-size: 18px;
    font-weight: 500;
    position: relative;
    &:after{
    content: "";
    position: absolute;
    background-color: #272727;
    height: 3px;
    width: 0%;
    left: 0;
    bottom: -3px;
    transition: 0.5s;
  }
    &:hover:after{
      width: 100%;
    }
  }
`
export const Icons = styled.div`
  margin-left: 30px;
  @media(max-width: 768px){
    display: none;
  }
  img{
    margin-left: 18px;
    cursor: pointer;
  }
`