import { IDataform, IPayment } from '../images/RegistriesImages'

export const createPayments = (data: IDataform): IPayment[] => {
  const payments: IPayment[] = []
  const dateLimit: Date = data.date != null ? new Date(data.date) : new Date()
  for (let i = 1; i <= data.totalInstallments; i += 1) {
    dateLimit.setMonth(dateLimit.getMonth() + 1)
    const payment: IPayment = {
      number: i,
      value: 0,
      paid: false,
      limiteDate: dateLimit.toISOString(),
      method: ''
    }
    payments.push(payment)
  }
  console.log(payments)
  return payments
}
