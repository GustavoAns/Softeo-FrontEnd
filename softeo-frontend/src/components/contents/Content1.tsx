import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { AppContext } from '../../Context/AppProvider'
import { ContextType, IRegistros } from '../../images/RegistriesImages'
import * as C from '../../css/App.styles'
import { month, valueFormatter } from '../../helpers/Formatter'
import { sumAllPayments } from '../../helpers/PaymentsHelpers'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Content1 = () => {
  const { registries } = React.useContext(AppContext) as ContextType
  const [filtredRegistries, setFiltredRegistries] = useState<IRegistros[]>([])
  const toDay = new Date()

  const applyFilters = (): void => {
    let newRegistries = registries
    const firstDate = new Date()
    firstDate.setDate(0)
    const secondDate = new Date()
    secondDate.setDate(30)
    // eslint-disable-next-line array-callback-return
    newRegistries = newRegistries.filter((item) => {
      const newDate = new Date(item.initialDate)
      if (firstDate <= newDate && newDate <= secondDate) {
        return item
      }
    })
    setFiltredRegistries(newRegistries)
  }

  useEffect(() => {
    void applyFilters()
  }, [registries, setFiltredRegistries])

  return (
    <C.Content1>
      <C.HeavySpan>
        Mes: {month[toDay.getMonth()]}
      </C.HeavySpan>
      <br />
      Total recebido: {valueFormatter(sumAllPayments(filtredRegistries))}
    </C.Content1>
  )
}
