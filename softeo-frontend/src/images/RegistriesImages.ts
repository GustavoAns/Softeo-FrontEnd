export interface IPayment {
  number: number
  value: number
  paid: boolean
  limiteDate: string
}

export interface IRegistros {
  _id?: number
  cpf: number
  initialDate: string
  name: string
  value: number
  totalInstallments: number
  payments: IPayment[]
}

export interface APIRegistro {
  data: IRegistros
}

export interface APIRegistrosArry {
  data: IRegistros[]
}

type UseState<S> = (action: S | ((prevState: S) => S)) => void

type handleChange = (value: string, checked: boolean, name: string) => void

type eventHandleChange<T extends HTMLElement> = (
  event: React.ChangeEvent<T>
) => void

export type Change<T extends HTMLElement> = handleChange | eventHandleChange<T>

export interface buttonProps {
  onChange?: Change<HTMLInputElement>
}

export interface ContextType {
  registries: IRegistros[]
  filters: IFilters
  handleFiltersInput: (event: React.ChangeEvent<HTMLInputElement> | Date, dateName?: string) => void
  loading: boolean
  error: boolean
  addRegistry: (IRegistros: IRegistros) => void
  startDate: Date
  setStartDate: UseState<Date>
  filtedRegistries: IRegistros[]
}

export interface Props {
  children: React.ReactNode
}

export interface IFilters {
  name: string
  cpf: string
  startDate: Date
  finalDate: Date
}
