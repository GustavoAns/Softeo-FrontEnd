import React from 'react'
import * as C from '../css/App.styles'
import { AppContext } from '../Context/AppProvider'
import { ContextType } from '../images/RegistriesImages'

// export interface Props {
//   prop: IProp;
// }

export const RegistriesCard: React.FC = () => {
  const { registries } = React.useContext(AppContext) as ContextType
  console.log(registries)

  return (
    <C.Card>
      <C.Cardname>
        Cardname
      </C.Cardname>
      <C.Cardcpf>
        Cardcpf
      </C.Cardcpf>
      <C.Cardintdate>
        Cardintdate
      </C.Cardintdate>
      <C.Cardvalue>
        Cardvalue
      </C.Cardvalue>
      <C.Cardinstallments>
        Cardinstallments
      </C.Cardinstallments>
      <C.Button1 onClick={() => console.log('Click 1')}>Test1</C.Button1>
      <C.Button2 onClick={() => console.log('Click 2')}>Test2</C.Button2>
      <C.Button3 onClick={() => console.log('Click 3')}>Test3</C.Button3>
    </C.Card>
  )
}
