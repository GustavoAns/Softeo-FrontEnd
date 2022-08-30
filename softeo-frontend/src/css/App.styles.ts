import styled from 'styled-components'
import { media } from './media'

export const Container = styled.div`
  font-family: 'Ubuntu', sans-serif;
  background: #c8d8e4;
  display:grid;
  height:100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 15fr 4fr 1fr;
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
  background: #ffffff;
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  img {
    width: 17rem;
    margin: auto;
  }
`

export const Main = styled.main`
  background: #cd8e4;
  grid-area: main;
  overflow: auto;
`
export const CardList = styled.div`
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
  background: #2b6777;
  grid-area: sidebar;
`

export const Content1 = styled.div`
  background: #2b6777;
  color: #f2f2f2;
  grid-area: content1;
  text-align:center;
`

export const Content2 = styled.div`
  background: #2b6777;
  color: #f2f2f2;
  grid-area: content2;
  text-align:center;
`

export const Content3 = styled.div`
  background: #2b6777;
  color: #f2f2f2;
  grid-area: content3;
  text-align:center;
`

export const HeavySpan = styled.span`
  font-weight: 900;
`

export const Footer = styled.footer`
  background: #2b6777;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  color: #f2f2f2;
  padding: 0.8em;
  padding: auto;
  font-size: 0.7rem;
`

export const Card = styled.div`
  border-radius: 1rem;
  padding: 0.5rem;
  background: #2b6777;
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
  background: #f2f2f2;
  grid-area: cardname;
`
export const Cardcpf = styled.div`
  border-radius: 1rem;
  padding: 0.2rem;
  padding-left: 0.4em;
  background: #f2f2f2;
  grid-area: cardcpf;
`
export const Cardintdate = styled.div`
  border-radius: 1rem;
  padding-left: 0.4em;
  background: #f2f2f2;
  grid-area: cardintdate;
`
export const Cardvalue = styled.div`
  border-radius: 1rem;
  padding-left: 0.4em;
  background: #f2f2f2;
  grid-area: cardvalue;
`
export const Cardinstallments = styled.div`
  border-radius: 1rem;
  padding-top: 0.5rem;
  padding-left: 0.4em;
  background: #f2f2f2;
  grid-area: cardinstallments;
`

export const ButtonGreen = styled.button`
  color: white;
  font-size: 2rem;
  background: #72CC86;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button1;
`
export const ButtonYellow = styled.button`
  font-size: 1.2rem;
  color: white;
  background: #ECBC2E;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button2;
`
export const ButtonRed = styled.button`
  color: white;
  font-size: 2rem;
  background: #DD3846;
  border: 2;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  grid-area: button3;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.7fr 1fr 1fr 1fr;
  grid-template-areas:
    'SimpleHr SimpleHr'
    'LabelSideBar1 LabelSideBar2'
    'LabelSideBar3 LabelSideBar4'
    'ButtonRestFilters ButtonCreate';
  grid-gap: 0.2rem;

  ${media.greaterThan('lg')`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-template-areas:
  'ButtonRestFilters ButtonCreate'
  'SimpleHr SimpleHr'
  'LabelSideBar1 LabelSideBar1'
  'LabelSideBar2 LabelSideBar2'
  'LabelSideBar3 LabelSideBar3'
  'LabelSideBar4 LabelSideBar4';
  height: 80%;
 `};
`

export const Label = styled.label`
  background: green;
  border-radius: 1rem;
  height: 2.6rem;
  width: 11.6rem;
  grid-area: inputmodal1;
`

export const LabelSideBar1 = styled.label`
  background: #52ab98;
  color: #f2f2f2;
  border-radius: 1rem;
  height: 2.6rem;
  width: 10rem;
  grid-area: LabelSideBar1;
  margin: auto;
`

export const LabelSideBar2 = styled.label`
  background: #52ab98;
  color: #f2f2f2;
  border-radius: 1rem;
  height: 2.6rem;
  width: 10rem;
  grid-area: LabelSideBar2;
  margin: auto;
`

export const LabelSideBar3 = styled.label`
  background: #52ab98;
  color: #f2f2f2;
  border-radius: 1rem;
  height: 2.6rem;
  width: 10rem;
  grid-area: LabelSideBar3;
  margin: auto;
`

export const LabelSideBar4 = styled.label`
  background: #52ab98;
  color: #f2f2f2;
  border-radius: 1rem;
  height: 2.6rem;
  width: 10rem;
  grid-area: LabelSideBar4;
  margin: auto;
`
export const ButtonRestFilters = styled.button`
  background: #ECBC2E;
  border-radius: 1rem;
  height: 50px;
  width: 105px;
  margin: auto;
  grid-area: ButtonRestFilters;
`
export const ButtonCreate = styled.button`
  background: #72CC86;
  border-radius: 1rem;
  height: 50px;
  width: 105px;
  margin: auto;
  grid-area: ButtonCreate;
`

export const Input = styled.input`
  background: #f2f2f2;
  border-radius: 1rem;
  display: grid;
  width: 150px;
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

export const Containereditmodal = styled.div`
  display:grid;
  max-width: 300px;
  height: 370px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 11rem))
`
export const Containereditmodal2 = styled.form`
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

export const Editinfos = styled.div`
  display:grid;
  max-width: 300px;
  height: 370px;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 11rem))
`
export const Buttoncloseedit = styled.button`
  color: white;
  background: red;
  border: 1;
  border-radius: 50px;
  height: 25px;
  width: 25px;
  grid-area: buttoncloseedit;
  margin-left: 90%;
`

export const NameEditModal = styled.button`
  
`

export const SimpleTitle = styled.h1`
  grid-area: SimpleHr;
  color: #f2f2f2;
  font-size: 2.7rem;
  border: 5px solid #f2f2f2;
  border-radius: 2rem;
  margin: auto;

  ${media.lessThan('lg')`
  font-size: 1.5rem;
 `};
`

export const DateContainer = styled.div`
  padding-left: 50px;

  span {
    color: red;
  }
`
