import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { AppContext } from '../../Context/AppProvider'
import { ContextType, IRegistros } from '../../images/RegistriesImages'
import * as C from '../../css/App.styles'
import { stringDateFormatter, valueFormatter } from '../../helpers/Formatter'
import { sumAllPayments } from '../../helpers/PaymentsHelpers'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Content2 = () => {
  const { registries, filters } = React.useContext(AppContext) as ContextType
  const [filtredRegistries, setFiltredRegistries] = useState<IRegistros[]>([])

  const applyFilters = (): void => {
    let newRegistries = registries

    if (filters.startDate < filters.finalDate) {
      // Clining a timestamp
      const firstDate = new Date(filters.startDate.toDateString())
      const secondDate = new Date(filters.finalDate.toDateString())
      // eslint-disable-next-line array-callback-return
      newRegistries = newRegistries.filter((item) => {
        const newDate = new Date(item.initialDate)
        if (firstDate <= newDate && newDate <= secondDate) {
          return item
        }
      })
    } else if (filters.startDate > filters.finalDate) {
      // Clining a timestamp
      const firstDate = new Date(filters.startDate.toDateString())
      const secondDate = new Date(filters.finalDate.toDateString())
      // eslint-disable-next-line array-callback-return
      newRegistries = newRegistries.filter((item) => {
        const newDate = new Date(item.initialDate)
        if (secondDate <= newDate && newDate <= firstDate) {
          return item
        }
      })
    }
    setFiltredRegistries(newRegistries)
  }

  useEffect(() => {
    void applyFilters()
  }, [registries, filters])

  if (stringDateFormatter(filters.startDate.toISOString()) === stringDateFormatter(filters.finalDate.toISOString())) {
    return (
      <C.Content2>
        Datas dos Filtros:
        <br />
        Altere alguma data para exibir o ganho total e as pendencias
      </C.Content2>
    )
  }

  return (
    <C.Content2>
      De {stringDateFormatter(filters.startDate.toISOString())}
      <br />
      Até {stringDateFormatter(filters.finalDate.toISOString())}
      <br />
      Total recebido: {valueFormatter(sumAllPayments(filtredRegistries))}
    </C.Content2>
  )
}
