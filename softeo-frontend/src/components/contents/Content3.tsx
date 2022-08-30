import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { AppContext } from '../../Context/AppProvider'
import { ContextType, IFilters } from '../../images/RegistriesImages'
import * as C from '../../css/App.styles'
import { stringDateFormatter, valueFormatter } from '../../helpers/Formatter'
import { sumAllPayments } from '../../helpers/PaymentsHelpers'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Content3 = () => {
  const { filtedRegistries, filters } = React.useContext(AppContext) as ContextType

  const objFilter: IFilters = {
    name: '',
    cpf: '',
    startDate: new Date(),
    finalDate: new Date()
  }

  if (
    filters.name === objFilter.name &&
    filters.cpf === objFilter.cpf &&
    stringDateFormatter(filters.startDate.toISOString()) === stringDateFormatter(filters.finalDate.toISOString())
  ) {
    return (
      <C.Content3>
        <C.HeavySpan>
          Todos os filtros:
        </C.HeavySpan>
        <br />
        Altere algum filtro para exibir o ganho total
      </C.Content3>
    )
  }

  return (
    <C.Content3>
      <C.HeavySpan>
        Todos os filtros:
      </C.HeavySpan>
      <br />
      Total recebido: {valueFormatter(sumAllPayments(filtedRegistries))}
    </C.Content3>
  )
}
