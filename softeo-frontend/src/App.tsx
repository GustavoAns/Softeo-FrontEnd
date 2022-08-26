import React from 'react'
import * as C from './App.styles'
import { AppContext } from './Context/AppProvider'
import { ContextType } from './types/Registriesimages'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  const { registries } = React.useContext(AppContext) as ContextType
  console.log(registries)

  return (
    <C.Container>
      Inicio
    </C.Container>
  )
}

export default App
