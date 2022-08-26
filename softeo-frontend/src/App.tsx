import React from 'react'
import * as C from './css/App.styles'
import { AppContext } from './Context/AppProvider'
import { ContextType } from './images/RegistriesImages'
import { RegistriesCard } from './components/RegistriesCard'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  const { registries, loading } = React.useContext(AppContext) as ContextType
  console.log(registries)

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
        {!loading
          ? <C.CardList>
          <RegistriesCard />
          <RegistriesCard />
          <RegistriesCard />
          <RegistriesCard />
          <RegistriesCard />
        </C.CardList>
          : <div>Loading</div>
        }
      </C.Main>
      <C.Sidebar>Sidebar</C.Sidebar>
      <C.Content1>Content1</C.Content1>
      <C.Content2>Content2</C.Content2>
      <C.Content3>Content3</C.Content3>
      <C.Footer>Footer</C.Footer>
    </C.Container>
  )
}

export default App
