export interface IPayment {
  number: number
  value: number
  paid: boolean
  method: string
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

export type UseState<S> = (action: S | ((prevState: S) => S)) => void

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
  modalIsOpen: boolean
  setModalIsOpen: UseState<boolean>
  editRegistryById: (IRegistros: IRegistros) => void
  removeRegistryById: (IRegistros: IRegistros) => void
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

export interface IDataform {
  cpf: string
  name: string
  totalInstallments: number
  value: number
}
