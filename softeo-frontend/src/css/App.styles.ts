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
  background: #d3e877;
  box-shadow: 0 0 10px 5px gray;
  display:grid;
  width: 20rem;
  height: 11rem;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 1fr 3fr 3fr 3fr 4fr 3fr 1fr;
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
  border-radius: 1rem;
  padding-top: 0.5rem;
  padding-left: 0.4em;
  background: #e9f390;
  grid-area: cardname;
`
export const Cardcpf = styled.div`
  border-radius: 1rem;
  padding: 0.2rem;
  padding-left: 0.4em;
  background: #e9f390;
  grid-area: cardcpf;
`
export const Cardintdate = styled.div`
  border-radius: 1rem;
  padding-left: 0.4em;
  background: #e9f390;
  grid-area: cardintdate;
`
export const Cardvalue = styled.div`
  border-radius: 1rem;
  padding-left: 0.4em;
  background: #e9f390;
  grid-area: cardvalue;
`
export const Cardinstallments = styled.div`
  border-radius: 1rem;
  padding-top: 0.5rem;
  padding-left: 0.4em;
  background: #e9f390;
  grid-area: cardinstallments;
`

export const Button1 = styled.button`
  color: white;
  font-size: 2rem;
  background: green;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button1;
`
export const Button2 = styled.button`
  font-size: 1.2rem;
  background: orange;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button2;
`
export const Button3 = styled.button`
  color: white;
  font-size: 2rem;
  background: red;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button3;
`

export const Filters = styled.div`
  background: red;
`

export const Label = styled.label`
  background: green;
  border-radius: 1rem;
  height: 2.6rem;
  width: 11.6rem;
  grid-area: inputmodal1;
`

export const Input = styled.input`
  background: blue;
  border-radius: 1rem;
  display: block;
`

export const ButtonReset = styled.button`
  background: #20ff03;
  border-radius: 1rem;
  height: 50px;
  width: 50px;
  font-size: 2.5rem;
`

export const Containerpaymentsmodal = styled.form`
  display:grid;
  max-width: 300px;
  height: 370px;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 11rem))
`
export const Labelmodal = styled.label`
  background: white;
  border-radius: 1rem;
  margin: auto;
  font-size: 1.5rem;
`

export const Inputmodal = styled.input`
  background: white;
  border-radius: 1rem;
  display: block;
`

export const Buttonsmodal = styled.div`
  display:flex-box;
  max-width: 300px;
  display: inline
`

export const Buttonmodalcreate = styled.button`
  background: #20ff03;
  border-radius: 1rem;
  height: 50px;
  width: 50px;
  font-size: 2.5rem;
  grid-area: buttonmodalcreate;
  margin-left: 46%;
`
export const Buttonmodalcancel = styled.button`
  background: red;
  border-radius: 1rem;
  height: 50px;
  width: 50px;
  font-size: 2.5rem;
  grid-area: buttonmodalcancel;
  margin-left: 10%;
`

export const Titlemodal = styled.h2`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  height: 1px;
`

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
`

export const Containermediummodal = styled.div`
  display:grid;
  max-width: 300px;
  height: 370px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 11rem))
`

export const Registyinfos = styled.div`
  display: grid;
  max-width: 300px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    '. buttonclose'
    'modalinfo1 modalinfo1'
    'modalinfo2 modalinfo3'
    'modalinfo4 modalinfo4';
`

export const Modalinfo1 = styled.span`
  margin: auto;
  grid-area: modalinfo1;
`
export const Modalinfo2 = styled.span`
  font-size: 0.8rem;
  margin: auto;
  grid-area: modalinfo2;
`
export const Modalinfo3 = styled.span`
  font-size: 0.8rem;
  margin: auto;
  grid-area: modalinfo3;
`
export const Modalinfo4 = styled.span`
  margin: auto;
  grid-area: modalinfo4;
`

export const CardListPayments = styled.div`
  display:grid;
  max-width: 300px;
  overflow: auto;
  grid-gap: 0.3rem;
`

export const PaymentsCard = styled.form`
  border-radius: 1rem;
  padding: 0.5rem;
  background: #d3e877;
  display:grid;
  width: 16rem;
  height: 11rem;
  grid-template-columns: 9fr 1fr;
  grid-template-rows: 1fr 3fr 3fr 3fr 4fr 3fr 1fr;
  grid-template-areas:
    '. button3'
    'paymentcardnumber button3'
    '. .'
    'cardvalue .'
    '. .'
    'cardmethod button1'
    '. button1';
  grid-gap: 0.2rem;
`

export const Cardmethod = styled.div`
  grid-area: cardmethod;
`

export const Paymentcardvalue = styled.div`
  grid-area: cardvalue;
`

export const Paymentcardnumber = styled.div`
  grid-area: paymentcardnumber;
  padding-left: 30%;
  font-size: 1.5rem;
`

export const Buttonclose = styled.button`
  color: white;
  background: red;
  border: 1;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  grid-area: buttonclose;
  margin-left: 90%;
`
