import React from 'react'
import Modal from 'react-modal'
import * as C from './css/App.styles'
// import { AppContext } from './Context/AppProvider'
// import { ContextType } from './images/RegistriesImages'
import { CardList } from './components/CardList'
import { Sidebar } from './components/Sidebar'
import { AddRegistriesModal } from './components/AddRegistriesModal'
import { Content1 } from './components/contents/Content1'
import { Content2 } from './components/contents/Content2'
import { Content3 } from './components/contents/Content3'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

Modal.setAppElement('#root')
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  return (
    <C.Container>
      <AddRegistriesModal />
      <NavBar />
      <C.Main>
        <CardList />
      </C.Main>
      <C.Sidebar>
        <Sidebar />
      </C.Sidebar>
      <Content1 />
      <Content2 />
      <Content3 />
      <Footer />
    </C.Container>
  )
}

export default App
