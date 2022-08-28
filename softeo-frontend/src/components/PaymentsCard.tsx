/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import * as C from '../css/App.styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, number } from 'yup'
import { valueFormatter } from '../helpers/Formatter'
// import { AppContext } from '../Context/AppProvider'
// import { ContextType, IRegistros } from '../images/RegistriesImages'
import { ContextType, IPayment, IRegistros } from '../images/RegistriesImages'
import { editPayments, removePayments } from '../helpers/PaymentsHelpers'
import { AppContext } from '../Context/AppProvider'

export interface Props {
  payment: IPayment
  registry: IRegistros
}

interface FormValues {
  method: string
  value: number
}

const schema = object({
  value: number().required('O valor é necessário').max(1000000, 'O valor maximo é de R$1000000').min(1, 'O valor minimo é de R$1'),
  method: string().required('O metodo é necessário').max(20, 'O limite de letras é de 20')
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const PaymentsCard = (prop: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ defaultValues: { value: 0, method: '' }, resolver: yupResolver(schema) })
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
        Metodo: {prop.payment.paid
        ? <span>{prop.payment.method}</span>
        : <C.Inputmodal {...register('method')}/>}
      <C.Error>{errors?.method?.message}</C.Error>
      </C.Cardmethod>
      {prop.payment.paid
        ? <span></span>
        : <C.Button1 type="submit">$</C.Button1>}
      <C.Button3 onClick={() => onRemove()}>X</C.Button3>
    </C.PaymentsCard>
  )
}