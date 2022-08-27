import React from 'react'
import * as C from './css/App.styles'
// import { AppContext } from './Context/AppProvider'
// import { ContextType } from './images/RegistriesImages'
import { CardList } from './components/CardList'
import { Sidebar } from './components/Sidebar'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  // const { registries } = React.useContext(AppContext) as ContextType

  // if (loading) {
  //   return (
  //     <div>Loading</div>
  //   )
  // }

  return (
    <C.Container>
      <C.Navbar>Navbar</C.Navbar>
      <C.Main>
        Main
        <CardList />
      </C.Main>
      <C.Sidebar>
        Sidebar
        <Sidebar />
      </C.Sidebar>
      <C.Content1>Content1</C.Content1>
      <C.Content2>Content2</C.Content2>
      <C.Content3>Content3</C.Content3>
      <C.Footer>Footer</C.Footer>
    </C.Container>
  )
}

export default App
