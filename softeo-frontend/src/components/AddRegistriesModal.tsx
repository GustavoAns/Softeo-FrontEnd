/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Modal from 'react-modal'
import { object, string } from 'yup'
import { AppContext } from '../Context/AppProvider'
import * as C from '../css/App.styles'
import { ContextType } from '../images/RegistriesImages'

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
  name: string().required('O Nome é necessário')
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const AddRegistriesModal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) })

  const onSubmit = (data: any): void => console.log(data)

  const { modalIsOpen, setModalIsOpen } = React.useContext(AppContext) as ContextType

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <C.Containermodal onSubmit={handleSubmit(onSubmit)}>
        <C.Titlemodal>Criar Venda</C.Titlemodal>
      <C.Labelmodal1>
        *Nome: ↴
        <C.Inputmodal
          type="text"
          {...register('name')}
        />
        <C.Error>{errors?.name?.message}</C.Error>
      </C.Labelmodal1>
      <C.Labelmodal2>
        *CPF: ↴
        <C.Inputmodal
          type="text"
          {...register('cpf')}
          // value={ }
          // onChange={ (e: any) => handleFiltersInput(e) }
        />
        <C.Error>{errors?.name?.message}</C.Error>
      </C.Labelmodal2>
      <C.Labelmodal3>
        *Valor: ↴
        <C.Inputmodal
          type="text"
          {...register('value')}
          // value={ }
          // onChange={ (e: any) => handleFiltersInput(e) }
        />
        <C.Error>{errors?.name?.message}</C.Error>
      </C.Labelmodal3>
      <C.Labelmodal4>
        Parcelas: ↴
        <C.Inputmodal
          type="number"
          {...register('totalInstallments')}
          // value={ }
          // onChange={ (e: any) => handleFiltersInput(e) }
        />
        <C.Error>{errors?.name?.message}</C.Error>
      </C.Labelmodal4>
      <C.Buttonsmodal>
        <C.Buttonmodalcancel type="submit">X</C.Buttonmodalcancel>
        <C.Buttonmodalcreate type="submit">+</C.Buttonmodalcreate>
      </C.Buttonsmodal>
      </C.Containermodal>
    </Modal>
  )
}
