import { IDataform, IPayment } from '../images/RegistriesImages'

export const createPayments = (data: IDataform): IPayment[] => {
  const toDayDate = new Date()
  const payments: IPayment[] = []
  for (let i = 1; i <= data.totalInstallments; i++) {
    const dateLimit = toDayDate
    dateLimit.setMonth(dateLimit.getMonth() + i)
    const payment: IPayment = {
      number: i,
      value: 0,
      paid: false,
      limiteDate: dateLimit.toISOString(),
      method: ''
    }
    payments.push(payment)
  }
  return payments
}
