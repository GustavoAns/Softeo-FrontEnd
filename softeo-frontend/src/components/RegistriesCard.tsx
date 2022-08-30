import React, { useState } from 'react'
import { AppContext } from '../Context/AppProvider'
import * as C from '../css/App.styles'
import { stringDateFormatter, valueFormatter } from '../helpers/Formatter'
// import { AppContext } from '../Context/AppProvider'
// import { ContextType, IRegistros } from '../images/RegistriesImages'
import { ContextType, IRegistros } from '../images/RegistriesImages'
import { EditRegistriesModal } from './EditRegistriesModal'
import { PaymentsModal } from './PaymentsModal'

export interface Props {
  registry: IRegistros
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const RegistriesCard = (prop: Props) => {
  const [modalCardIsOpen, setModalCardIsOpen] = useState<boolean>(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false)
  const { name, cpf, initialDate, value, totalInstallments } = prop.registry
  const { removeRegistryById } = React.useContext(AppContext) as ContextType

  return (
    <C.Card >
      <PaymentsModal registry={prop.registry} modalCardIsOpen={modalCardIsOpen} setModalCardIsOpen={setModalCardIsOpen}/>
      <EditRegistriesModal registry={prop.registry} editModalIsOpen={editModalIsOpen} setEditModalIsOpen={setEditModalIsOpen}/>
      <C.Cardname>
        <C.HeavySpan>Nome: </C.HeavySpan>
        {name}
      </C.Cardname>
      <C.Cardcpf>
        <C.HeavySpan>CPF: </C.HeavySpan>
        {cpf}
      </C.Cardcpf>
      <C.Cardintdate>
        <C.HeavySpan>Data Inicial: </C.HeavySpan>
        {stringDateFormatter(initialDate)}
      </C.Cardintdate>
      <C.Cardvalue>
      <C.HeavySpan>Valor: </C.HeavySpan>
        {valueFormatter(value)}
      </C.Cardvalue>
      <C.Cardinstallments>
        <C.HeavySpan>Parcelas Acordadas: </C.HeavySpan>
        {totalInstallments}
      </C.Cardinstallments>
      <C.Button1 onClick={() => setModalCardIsOpen(true)}>$</C.Button1>
      <C.Button2 onClick={() => setEditModalIsOpen(true)}>Edit</C.Button2>
      <C.Button3 onClick={() => removeRegistryById(prop.registry)}>X</C.Button3>
    </C.Card>
  )
}
