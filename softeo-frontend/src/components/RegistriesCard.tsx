import React from 'react'
import * as C from '../css/App.styles'
import { stringDateFormatter, valueFormatter } from '../helpers/Formatter'
// import { AppContext } from '../Context/AppProvider'
// import { ContextType, IRegistros } from '../images/RegistriesImages'
import { IRegistros } from '../images/RegistriesImages'

export interface Props {
  registry?: IRegistros
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RegistriesCard = (prop: Props) => {
  const { name, cpf, initialDate, value, totalInstallments } = prop.registry as IRegistros
  // payments
  return (
    <C.Card >
      <C.Cardname>
        Nome: {name}
      </C.Cardname>
      <C.Cardcpf>
        CPF: {cpf}
      </C.Cardcpf>
      <C.Cardintdate>
        Data Inicial: {stringDateFormatter(initialDate)}
      </C.Cardintdate>
      <C.Cardvalue>
        Valor: {valueFormatter(value)}
      </C.Cardvalue>
      <C.Cardinstallments>
        Parcelas: {totalInstallments}
      </C.Cardinstallments>
      <C.Button1 onClick={() => console.log('Click 1')}>$</C.Button1>
      <C.Button2 onClick={() => console.log('Click 2')}>Edit</C.Button2>
      <C.Button3 onClick={() => console.log('Click 3')}>X</C.Button3>
    </C.Card>
  )
}
