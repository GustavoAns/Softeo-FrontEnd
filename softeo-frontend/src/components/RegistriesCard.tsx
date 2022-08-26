import React from 'react'
import * as C from '../css/App.styles'
// import { AppContext } from '../Context/AppProvider'
// import { ContextType, IRegistros } from '../images/RegistriesImages'
// import { IRegistros } from '../images/RegistriesImages'

// export interface Props {
//   registry?: IRegistros
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RegistriesCard = () => {
  // { registry }: Props
  // const { registries } = React.useContext(AppContext) as ContextType
  // const { _id } = registry as IRegistros

  return (
    <C.Card >
      <C.Cardname>
        Nome: Branda Codorna
      </C.Cardname>
      <C.Cardcpf>
        CPF: 12345678910
      </C.Cardcpf>
      <C.Cardintdate>
        Data Inicial: 23/03/2001
      </C.Cardintdate>
      <C.Cardvalue>
        Valor: R$100,00
      </C.Cardvalue>
      <C.Cardinstallments>
        Parcelas: 2
      </C.Cardinstallments>
      <C.Button1 onClick={() => console.log('Click 1')}>$</C.Button1>
      <C.Button2 onClick={() => console.log('Click 2')}>Edit</C.Button2>
      <C.Button3 onClick={() => console.log('Click 3')}>X</C.Button3>
    </C.Card>
  )
}
