/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Modal from 'react-modal'
import { object, string, number } from 'yup'
import { AppContext } from '../../Context/AppProvider'
import * as C from '../../css/App.styles'
import { ContextType, IDataform } from '../../images/RegistriesImages'
import { createPayments } from '../../helpers/CreateRegistry'

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
  date: string
}

const schema = object({
  name: string().required('O nome é necessário').max(50, 'O limite de letras é de 50'),
  cpf: string().required('O CPF é necessário').matches(/^[0-9]+$/, 'Insira somente números').min(11, 'O cpf deve ter 11 digitos').max(11, 'O cpf deve ter 11 digitos'),
  value: string().required('O valor é necessário').matches(/^[0-9]+$/, 'Insira somente números').min(1, 'O valor deve ter no minimo 1 digito').max(10, 'O valor deve ter no maximo 10 digitos'),
  totalInstallments: number().max(12, 'O limete de parcelas é de 12').min(1, 'A quantidade mínima de parcelas é de 1')
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AddRegistriesModal = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ defaultValues: { value: 0, totalInstallments: 1 }, resolver: yupResolver(schema) })
  const [dateSelected, setDateSelected] = useState<Date | null>(null)

  const onSubmit = (data: IDataform): void => {
    const editData: IDataform = {
      ...data,
      date: dateSelected?.toISOString()
    }
    const paymentsArray = createPayments(editData)
    const newDate = dateSelected != null ? dateSelected : new Date()
    setDateSelected(null)
    const registry = {
      cpf: data.cpf,
      initialDate: newDate.toISOString(),
      name: data.name,
      value: Number(data.value),
      totalInstallments: data.totalInstallments,
      payments: paymentsArray
    }
    addRegistry(registry)
    setModalIsOpen(false)
  }

  const { modalIsOpen, setModalIsOpen, addRegistry } = React.useContext(AppContext) as ContextType

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <C.Containerpaymentsmodal onSubmit={handleSubmit(onSubmit)}>
        <C.Titlemodal>Criar Venda</C.Titlemodal>
      <C.Labelmodal>
        *Nome: ↴
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
      <C.Labelmodal>
        <C.DateContainer>
          <span>Data Opcional: ↴</span>
          <DatePicker wrapperClassName="date-picker" selected={dateSelected} onChange={(date: Date) => setDateSelected(date)}/>
        </C.DateContainer>
      </C.Labelmodal>
      <C.Buttonsmodal>
        <C.Buttonmodalcancel onClick={() => {
          reset()
          setModalIsOpen(false)
        }}>
          X
        </C.Buttonmodalcancel>
        <C.Buttonmodalcreate type="submit">+</C.Buttonmodalcreate>
      </C.Buttonsmodal>
      </C.Containerpaymentsmodal>
    </Modal>
  )
}
