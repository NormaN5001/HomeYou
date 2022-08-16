import styled from 'styled-components'

export const Menu = styled.section`
  background-color: #272727;
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  ul{
  	list-style: none;
  	width: 200px;
  	height: 250px;
  }
  li{
  	width: 100%;
  	height: 33%;
  	display: flex;
  	justify-content: center;
  	align-items: center;

  	font-weight: 600;
  	font-family: 'Montserrat', sans-serif;
  	color: #FFF;
  }
  @media(max-width: 768px){
    display: block;
  }
`
