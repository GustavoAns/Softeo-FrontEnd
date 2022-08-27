import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as C from '../css/App.styles'
import { AppContext } from '../Context/AppProvider'
import { ContextType } from '../images/RegistriesImages'
// type InputProps = {
//   value: string
//   handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Sidebar = () => {
  const { filters, handleFiltersInput, setModalIsOpen } = React.useContext(AppContext) as ContextType

  // if (loading) {
  //   return (
  //     <div>Loading</div>
  //   )
  // }

  return (
    <C.Filters>
      <C.Label>
        Nome:
        <C.Input
          type="text"
          name="name"
          value={ filters.name }
          onChange={ (e: any) => handleFiltersInput(e) }
        ></C.Input>
      </C.Label>
      <C.Label>
        CPF:
        <C.Input
          type="text"
          name="cpf"
          value={ filters.cpf }
          onChange={ (e: any) => handleFiltersInput(e) }
        ></C.Input>
      </C.Label>
      <C.Label>
        Data Inicial
        <DatePicker dateFormat="dd/MM/yyyy" selected={filters.startDate} onChange={(date: any) => handleFiltersInput(date, 'startDate')}/>
      </C.Label>
      <C.Label>
        Data Final
        <DatePicker dateFormat="dd/MM/yyyy" selected={filters.finalDate} onChange={(date: any) => handleFiltersInput(date, 'finalDate')}/>
      </C.Label>
      <C.ButtonReset onClick={() => setModalIsOpen(true)}>+</C.ButtonReset>
    </C.Filters>
  )
}
