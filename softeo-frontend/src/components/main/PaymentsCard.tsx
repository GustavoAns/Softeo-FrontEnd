/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import * as C from '../../css/App.styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { valueFormatter } from '../../helpers/Formatter'
import { ContextType, IPayment, IRegistros } from '../../images/RegistriesImages'
import { editPayments, removePayments } from '../../helpers/PaymentsHelpers'
import { AppContext } from '../../Context/AppProvider'

export interface Props {
  payment: IPayment
  registry: IRegistros
}

interface FormValues {
  method: string
  value: string
}

const schema = object({
  value: string().required('O valor é necessário').matches(/^[0-9]+$/, 'Insira somente números').min(1, 'O valor deve ter no minimo 1 digito').max(10, 'O valor deve ter no maximo 10 digitos'),
  method: string().required('O método é necessário').max(20, 'O limite de letras é de 20')
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const PaymentsCard = (prop: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: { value: '', method: '' }, resolver: yupResolver(schema) })
  const { editRegistryById } = React.useContext(AppContext) as ContextType
  const { cpf, initialDate, name, value, totalInstallments, payments, _id } = prop.registry

  const onSubmit = (data: FormValues): void => {
    const payload = {
      _id,
      cpf,
      initialDate,
      name,
      value,
      totalInstallments,
      payments: editPayments(payments, prop.payment?.number, data)
    }
    editRegistryById(payload)
  }

  const onRemove = (): void => {
    const payload = {
      _id,
      cpf,
      initialDate,
      name,
      value,
      totalInstallments,
      payments: removePayments(payments, prop.payment?.number)
    }
    editRegistryById(payload)
  }

  return (
    <C.PaymentsCard onSubmit={handleSubmit(onSubmit)}>
      <C.Paymentcardnumber>
        Parcela: {prop.payment?.number}
      </C.Paymentcardnumber>
      <C.Paymentcardvalue>
        Valor: {prop.payment.paid
        ? <span>{valueFormatter(prop.payment.value)}</span>
        : <C.Inputmodal {...register('value')}/>}
        <C.Error>{errors?.value?.message}</C.Error>
      </C.Paymentcardvalue>
      <C.Cardmethod>
        Método: {prop.payment.paid
        ? <span>{prop.payment.method}</span>
        : <C.Inputmodal {...register('method')}/>}
      <C.Error>{errors?.method?.message}</C.Error>
      </C.Cardmethod>
      {prop.payment.paid
        ? <span></span>
        : <C.ButtonGreen type="submit">$</C.ButtonGreen>}
      <C.ButtonRed onClick={() => onRemove()}>X</C.ButtonRed>
    </C.PaymentsCard>
  )
}
