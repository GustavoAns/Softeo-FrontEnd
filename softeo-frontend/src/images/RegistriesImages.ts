export interface IPayment {
  number: number
  value: number
  paid: boolean
  limiteDate: string
}

export interface IRegistros {
  _id: number
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

export interface TodoErrorResponse {
  error: String
}

type UseState<S> = (action: S | ((prevState: S) => S)) => void

export interface ContextType {
  registries: IRegistros[]
  nameSearch: string
  setNameSearch: UseState<string>
  loading: boolean
  error: boolean
}

export interface Props {
  children: React.ReactNode
}
