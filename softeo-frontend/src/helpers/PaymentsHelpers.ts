/* eslint-disable array-callback-return */
import { IPayment, IRegistros } from '../images/RegistriesImages'

export const sumPayments = (payments: IPayment[]): number => {
  let acc = 0
  // eslint-disable-next-line array-callback-return
  payments.map((payment) => {
    if (payment.paid) {
      acc += payment.value
    }
  })
  return acc
}

interface FormValues {
  method: string
  value: number
}

export const sumAllPayments = (registries: IRegistros[]): number => {
  let acc = 0
  registries.map((registry) => {
    registry.payments.map((payment) => {
      if (payment.paid) {
        acc += payment.value
      }
    })
  })
  return acc
}

interface FormValues {
  method: string
  value: number
}

export const editPayments = (payments: IPayment[], num: number, data: FormValues): IPayment[] => {
  const acc: IPayment[] = []
  for (let i = 0; i < payments.length; i++) {
    if (i + 1 === num) {
      const obj = {
        number: num,
        value: data.value,
        paid: true,
        method: data.method,
        limiteDate: payments[i].limiteDate
      }
      acc.push(obj)
    } else {
      acc.push(payments[i])
    }
  }
  return acc
}

export const removePayments = (payments: IPayment[], num: number): IPayment[] => {
  const acc: IPayment[] = []
  for (let i = 0; i < payments.length; i++) {
    if (i + 1 === num) {
      const obj = {
        number: num,
        value: 0,
        paid: false,
        method: '',
        limiteDate: payments[i].limiteDate
      }
      acc.push(obj)
    } else {
      acc.push(payments[i])
    }
  }
  return acc
}

export const resizePayments = (payments: IPayment[], num: number): IPayment[] => {
  const acc: IPayment[] = []
  if (payments.length < num) {
    for (let i = 0; i < num; i++) {
      if (i < payments.length) {
        acc.push(payments[i])
      } else {
        const newDate = new Date(payments[0].limiteDate)
        newDate.setMonth(newDate.getMonth() + (i + 1))
        const obj = {
          number: (i + 1),
          value: 0,
          paid: false,
          method: '',
          limiteDate: newDate.toISOString()
        }
        acc.push(obj)
      }
    }
  } else {
    for (let i = 0; i < num; i++) {
      acc.push(payments[i])
    }
  }
  return acc
}
