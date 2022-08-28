/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import * as C from '../css/App.styles'

import Modal from 'react-modal'

// import { AppContext } from '../Context/AppProvider'
// import { ContextType, IRegistros } from '../images/RegistriesImages'
import { IRegistros, UseState } from '../images/RegistriesImages'
import { CardListPymants } from './CardListPayments'
import { sumPayments } from '../helpers/PaymentsHelpers'
import { valueFormatter } from '../helpers/Formatter'

export interface Props {
  registry: IRegistros
  modalCardIsOpen: boolean
  setModalCardIsOpen: UseState<boolean>
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: 300,
    height: 370,
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem'
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const PaymentsModal = (prop: Props) => {
  // const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: { value: 0, totalInstallments: 1 }, resolver: yupResolver(schema) })
  // const { handleSubmit } = useForm<FormValues>({ defaultValues: { value: 0, totalInstallments: 1 }, resolver: yupResolver(schema) })
  // const { name, cpf, initialDate, value, totalInstallments } = prop.registry as IRegistros

  return (
    <Modal
      isOpen={prop.modalCardIsOpen}
      onRequestClose={() => prop.setModalCardIsOpen(false)}
      style={customStyles}
    >
      <C.Containereditmodal>
        <C.Registyinfos>
          <C.Buttonclose onClick={() => prop.setModalCardIsOpen(false)}>X</C.Buttonclose>
          <C.Modalinfo1>
            Nome: {prop.registry?.name}
          </C.Modalinfo1>
          <C.Modalinfo2>
            Valor Pago: {valueFormatter(sumPayments(prop.registry.payments))}
          </C.Modalinfo2>
          <C.Modalinfo3>
            Tratamento: {valueFormatter(prop.registry?.value)}
          </C.Modalinfo3>
          <C.Modalinfo4>
            CPF: {prop.registry?.cpf}
          </C.Modalinfo4>
        </C.Registyinfos>
        <CardListPymants registry={prop.registry}/>
      </C.Containereditmodal>
    </Modal>
  )
}
