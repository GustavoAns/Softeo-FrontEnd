/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import * as C from '../css/App.styles'
import Modal from 'react-modal'
import { ContextType, IDataform, IRegistros, UseState } from '../images/RegistriesImages'
import { number, object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { resizePayments } from '../helpers/PaymentsHelpers'
import { AppContext } from '../Context/AppProvider'

export interface Props {
  registry: IRegistros
  editModalIsOpen: boolean
  setEditModalIsOpen: UseState<boolean>
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

interface FormValues {
  name: string
  cpf: string
  value: number
  totalInstallments: number
}

const schema = object({
  name: string().max(50, 'O limite de letras é de 50'),
  cpf: string().matches(/^[0-9]+$/, 'Insira somente numeros').min(11, 'O cpf deve ter 11 digitos').max(11, 'O cpf deve ter 11 digitos'),
  value: number().max(1000000, 'O valor maximo é de R$1000000').min(1, 'O valor minimo é de R$1'),
  totalInstallments: number().max(12, 'O limete de parcelas é de 12').min(1, 'A quantidade minima de parcelas é de 1')
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const EditRegistriesModal = (prop: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: { name: prop.registry.name, cpf: prop.registry.cpf.toString(), value: prop.registry.value, totalInstallments: prop.registry.totalInstallments }, resolver: yupResolver(schema) })
  const { editRegistryById } = React.useContext(AppContext) as ContextType

  const onSubmit = (data: IDataform): void => {
    const paymentsArray = resizePayments(prop.registry.payments, data.totalInstallments)
    const payment = {
      _id: prop.registry._id,
      cpf: parseInt(data.cpf),
      initialDate: prop.registry.initialDate,
      name: data.name,
      value: data.value,
      totalInstallments: data.totalInstallments,
      payments: paymentsArray
    }
    editRegistryById(payment)
    prop.setEditModalIsOpen(false)
  }

  return (
    <Modal
      isOpen={prop.editModalIsOpen}
      onRequestClose={() => prop.setEditModalIsOpen(false)}
      style={customStyles}
    >
      <C.Containereditmodal2 onSubmit={handleSubmit(onSubmit)}>
        <C.Editinfos>
          <C.Labelmodal>
            Nome: ↴
            <C.Inputmodal
              type="text"
              {...register('name')}
            />
            <C.Error>{errors?.name?.message}</C.Error>
          </C.Labelmodal>
          <C.Labelmodal>
            *CPF: ↴
            <C.Inputmodal
              type="text"
              {...register('cpf')}
            />
            <C.Error>{errors?.cpf?.message}</C.Error>
          </C.Labelmodal>
          <C.Labelmodal>
            *Valor: ↴
            <C.Inputmodal
              type="text"
              {...register('value')}
            />
            <C.Error>{errors?.value?.message}</C.Error>
          </C.Labelmodal>
          <C.Labelmodal>
            Parcelas: ↴
            <C.Inputmodal
              type="number"
              {...register('totalInstallments')}
            />
            <C.Error>{errors?.totalInstallments?.message}</C.Error>
          </C.Labelmodal>
          <C.Buttonsmodal>
            <C.Buttonmodalcancel onClick={() => prop.setEditModalIsOpen(false)}>X</C.Buttonmodalcancel>
            <C.Buttonmodalcreate type="submit">✔</C.Buttonmodalcreate>
          </C.Buttonsmodal>
        </C.Editinfos>
      </C.Containereditmodal2>
    </Modal>
  )
}
