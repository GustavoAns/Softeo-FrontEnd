import React from 'react'
import { AppContext } from '../Context/AppProvider'
// import * as C from '../css/App.styles'
import { ContextType } from '../images/RegistriesImages'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const CardList = () => {
  const { loading } = React.useContext(AppContext) as ContextType

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <h1>WIP</h1>
  )
}
