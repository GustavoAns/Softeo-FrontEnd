import styled from 'styled-components'
import { media } from './media'

export const Container = styled.div`
  display:grid;
  height:100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 15fr 4fr 2fr;
  grid-template-areas:
    'nav nav nav nav'
    'sidebar main main main'
    'sidebar content1 content2 content3'
    'sidebar footer footer footer';
  grid-gap: 0.2rem;
  ${media.lessThan('lg')`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 4fr 6fr 22fr 8fr 2fr;
    grid-template-areas:
      'nav nav nav'
      'sidebar sidebar sidebar'
      'main main main'
      'content1 content2 content3'
      'footer footer footer';
 `};
`
export const Navbar = styled.nav`
  background: #a7ffeb;
  grid-area: nav;
`

export const Main = styled.main`
  background: #84ffff;
  grid-area: main;
  overflow: auto;
`
export const CardList = styled.div`
  background: yellow;
  margin: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  justify-content:center;
  ${media.greaterThan('sm')`
    grid-template-columns: repeat(auto-fit, minmax(22rem, 11rem));

 `};
`

export const Sidebar = styled.div`
  background: #18ffff;
  grid-area: sidebar;
`

export const Content1 = styled.div`
  background: #6fffd2;
  grid-area: content1;
`

export const Content2 = styled.div`
  background: #64ffda;
  grid-area: content2;
`

export const Content3 = styled.div`
  background: #73ffba;
  grid-area: content3;
`

export const Footer = styled.footer`
  background: #1de9b6;
  grid-area: footer;
`

export const Card = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  background: #4a4f4b;
  box-shadow: 0 0 10px 5px gray;
  display:grid;
  width: 20rem;
  height: 11rem;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 1fr 3fr 3fr 3fr 3fr 3fr 1fr;
  grid-template-areas:
    '. button1'
    'cardname button1'
    'cardcpf button2'
    'cardintdate button2'
    'cardvalue .'
    'cardinstallments button3'
    '. button3';
  grid-gap: 0.2rem;
`
export const Cardname = styled.div`
  background: blue;
  grid-area: cardname;
`
export const Cardcpf = styled.div`
  background: #1de9b6;
  grid-area: cardcpf;
`
export const Cardintdate = styled.div`
  background: red;
  grid-area: cardintdate;
`
export const Cardvalue = styled.div`
  background: red;
  grid-area: cardvalue;
`
export const Cardinstallments = styled.div`
  background: red;
  grid-area: cardinstallments;
`

export const Button1 = styled.button`
  background: green;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button1;
`
export const Button2 = styled.button`
  background: blue;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button2;
`
export const Button3 = styled.button`
  background: yellow;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button3;
`
