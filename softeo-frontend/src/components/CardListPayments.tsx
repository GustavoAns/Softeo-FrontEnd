import React from 'react'
import * as C from '../css/App.styles'
import { sumPayments } from '../helpers/PaymentsHelpers'
import { IRegistros } from '../images/RegistriesImages'
import { PaymentsCard } from './PaymentsCard'
export interface Props {
  registry: IRegistros
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const CardListPymants = (prop: Props) => {
  // const { filtedRegistries } = React.useContext(AppContext) as ContextType
  if (sumPayments(prop.registry.payments) >= prop.registry.value) {
    let filtedPaymentsprop = prop.registry.payments
    // eslint-disable-next-line array-callback-return
    filtedPaymentsprop = filtedPaymentsprop.filter((item) => {
      if (item.paid) {
        return item
      }
    })
    return (
      <C.CardListPayments>
        {filtedPaymentsprop.map((payment) => (
          <PaymentsCard key={payment.number} payment={payment} registry={prop.registry}/>
        ))}
      </C.CardListPayments>
    )
  }

  return (
    <C.CardListPayments>
      {prop.registry.payments.map((payment) => (
        <PaymentsCard key={payment.number} payment={payment} registry={prop.registry}/>
      ))}
    </C.CardListPayments>
  )
}
