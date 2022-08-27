import React from 'react'
import { AppContext } from '../Context/AppProvider'
import * as C from '../css/App.styles'
import { ContextType } from '../images/RegistriesImages'
import { RegistriesCard } from './RegistriesCard'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const CardList = () => {
  const { loading, filtedRegistries } = React.useContext(AppContext) as ContextType

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <C.CardList>
      {filtedRegistries.map((registry) => (
        <RegistriesCard key={registry._id} registry={registry}/>
      ))}
    </C.CardList>
  )
}
