import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import * as C from '../../css/App.styles'
import { AppContext } from '../../Context/AppProvider'
import { ContextType, IFilters } from '../../images/RegistriesImages'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Sidebar = () => {
  const { filters, handleFiltersInput, setModalIsOpen, setFilters, applyFilters } = React.useContext(AppContext) as ContextType

  const onReset = (): void => {
    const objFilter: IFilters = {
      name: '',
      cpf: '',
      startDate: new Date(),
      finalDate: new Date()
    }
    applyFilters(objFilter)
    setFilters(objFilter)
  }

  return (
    <C.Filters>
      <C.SimpleTitle><C.HeavySpan>⠀Filtros⠀</C.HeavySpan></C.SimpleTitle>
      <C.LabelSideBar1>
      <C.HeavySpan>Nome:</C.HeavySpan>
        <C.Input
          type="text"
          name="name"
          value={ filters.name }
          onChange={ (e: any) => handleFiltersInput(e) }
        ></C.Input>
      </C.LabelSideBar1>
      <C.LabelSideBar2>
      <C.HeavySpan>CPF:</C.HeavySpan>
        <C.Input
          type="text"
          name="cpf"
          value={ filters.cpf }
          onChange={ (e: any) => handleFiltersInput(e) }
        ></C.Input>
      </C.LabelSideBar2>
      <C.LabelSideBar3>
      <C.HeavySpan>Data Inicial:</C.HeavySpan>
        <DatePicker wrapperClassName="date-picker" className='date' dateFormat="dd/MM/yyyy" selected={filters.startDate} onChange={(date: any) => handleFiltersInput(date, 'startDate')}/>
      </C.LabelSideBar3>
      <C.LabelSideBar4>
      <C.HeavySpan>Data Final:</C.HeavySpan>
        <style>
          {`.date-picker input {
            width: 150px;
            border-radius: 2rem;
        }`}
        </style>
        <DatePicker wrapperClassName="date-picker" dateFormat="dd/MM/yyyy" selected={filters.finalDate} onChange={(date: any) => handleFiltersInput(date, 'finalDate')}/>
      </C.LabelSideBar4>
      <C.ButtonRestFilters onClick={() => onReset()}>
        <C.HeavySpan>↺Resetar Filtros</C.HeavySpan>
      </C.ButtonRestFilters>
      <C.ButtonCreate onClick={() => setModalIsOpen(true)}>
        <C.HeavySpan>+Criar Registro</C.HeavySpan>
      </C.ButtonCreate>
    </C.Filters>
  )
}
