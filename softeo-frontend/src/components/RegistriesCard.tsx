import React from 'react'
import * as C from '../css/App.styles'
import { AppContext } from '../Context/AppProvider'
import { ContextType, IRegistros } from '../images/RegistriesImages'
// import { IRegistros } from '../images/RegistriesImages'

// export interface Props {
//   registry?: IRegistros
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RegistriesCard = () => {
  // { registry }: Props
  // const { registries, addRegistry } = React.useContext(AppContext) as ContextType
  const { addRegistry } = React.useContext(AppContext) as ContextType
  // const len = registries.length - 1
  const date = new Date()
  const date2 = new Date()
  const date3 = new Date()

  date2.setMonth(date2.getMonth() + 1)
  date3.setMonth(date3.getMonth() + 2)

  const objTest: IRegistros = {
    cpf: 12345678910,
    initialDate: date.toISOString(),
    name: 'Gustavo Anselmo',
    value: 100,
    totalInstallments: 2,
    payments: [
      {
        number: 1,
        value: 50,
        paid: true,
        limiteDate: date2.toISOString()
      }, {
        number: 2,
        value: 50,
        paid: false,
        limiteDate: date3.toISOString()
      }
    ]
  }

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
      <C.Button1 onClick={() => addRegistry(objTest)}>$</C.Button1>
      <C.Button2 onClick={() => console.log('Click 2')}>Edit</C.Button2>
      <C.Button3 onClick={() => console.log('Click 3')}>X</C.Button3>
    </C.Card>
  )
}
