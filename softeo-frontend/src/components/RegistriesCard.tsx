import React, { useState } from 'react'
import { AppContext } from '../Context/AppProvider'
import * as C from '../css/App.styles'
import { stringDateFormatter, valueFormatter } from '../helpers/Formatter'
// import { AppContext } from '../Context/AppProvider'
// import { ContextType, IRegistros } from '../images/RegistriesImages'
import { ContextType, IRegistros } from '../images/RegistriesImages'
import { PaymentsModal } from './PaymentsModal'

export interface Props {
  registry: IRegistros
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RegistriesCard = (prop: Props) => {
  const [modalCardIsOpen, setModalCardIsOpen] = useState<boolean>(false)
  const { name, cpf, initialDate, value, totalInstallments } = prop.registry
  const { removeRegistryById } = React.useContext(AppContext) as ContextType

  return (
    <C.Card >
      <PaymentsModal registry={prop.registry} modalCardIsOpen={modalCardIsOpen} setModalCardIsOpen={setModalCardIsOpen}/>
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
        Parcelas Acordadas: {totalInstallments}
      </C.Cardinstallments>
      <C.Button1 onClick={() => setModalCardIsOpen(true)}>$</C.Button1>
      <C.Button2 onClick={() => console.log('Click 2')}>Edit</C.Button2>
      <C.Button3 onClick={() => removeRegistryById(prop.registry)}>X</C.Button3>
    </C.Card>
  )
}
