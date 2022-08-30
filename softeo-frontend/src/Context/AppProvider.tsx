/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { IRegistros, ContextType, APIRegistrosArry, Props, IFilters } from '../images/RegistriesImages'

export const AppContext = createContext< ContextType | null >(null)

const API_URL = 'https://softeo-backend.herokuapp.com/'

export const API = axios.create({
  baseURL: API_URL
})

const objFilter: IFilters = {
  name: '',
  cpf: '',
  startDate: new Date(),
  finalDate: new Date()
}

// eslint-disable-next-line react/prop-types
export const ContactsProvider: React.FC<Props> = ({ children }) => {
  const [registries, setRegistries] = useState<IRegistros[]>([])
  const [filtedRegistries, setFiltedRegistries] = useState<IRegistros[]>([])
  const [filters, setFilters] = useState<IFilters>(objFilter)
  const [startDate, setStartDate] = useState(new Date())
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const fetchRegistries = useCallback(async (): Promise<void> => {
    setLoading(true)
    setError(false)

    try {
      const pyload: APIRegistrosArry = await API.get('/')
      if (pyload.data) {
        setRegistries(pyload.data)
        applyFilters(filters, pyload.data)
      }
    } catch (err) {
      setError(true)
    }

    setLoading(false)
  }, [])

  const addRegistry = useCallback(async (registry: IRegistros) => {
    try {
      await API.post('/', {
        ...registry
      })
      await fetchRegistries()
    } catch (err) {
      setError(true)
    }
  }, [fetchRegistries])

  const editRegistryById = useCallback(async (registry: IRegistros) => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await API.put(`/${registry._id}`, {
        ...registry
      })
      await fetchRegistries()
      await applyFilters(filters)
    } catch (err) {
      setError(true)
    }
  }, [fetchRegistries])

  const removeRegistryById = useCallback(async (registry: IRegistros) => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      await API.delete(`/${registry._id}`)
      await fetchRegistries()
    } catch (err) {
      setError(true)
    }
  }, [fetchRegistries])

  useEffect(() => {
    void fetchRegistries()
  }, [fetchRegistries])

  const applyFilters = (newFilters: IFilters, data?: IRegistros[]): void => {
    let newRegistries = registries
    if (data) {
      newRegistries = data
    }
    if (newFilters.name !== '') {
      // eslint-disable-next-line array-callback-return
      newRegistries = newRegistries.filter((item) => {
        if (item.name.toLowerCase().includes(newFilters.name.toLowerCase())) {
          return item
        }
      })
    }
    if (newFilters.cpf !== '') {
      // eslint-disable-next-line array-callback-return
      newRegistries = newRegistries.filter((item) => {
        if (String(item.cpf).includes(String(newFilters.cpf))) {
          return item
        }
      })
    }
    if (newFilters.startDate < newFilters.finalDate) {
      // Clining a timestamp
      const firstDate = new Date(newFilters.startDate.toDateString())
      const secondDate = new Date(newFilters.finalDate.toDateString())
      // eslint-disable-next-line array-callback-return
      newRegistries = newRegistries.filter((item) => {
        const newDate = new Date(item.initialDate)
        if (firstDate <= newDate && newDate <= secondDate) {
          return item
        }
      })
    } else if (newFilters.startDate > newFilters.finalDate) {
      // Clining a timestamp
      const firstDate = new Date(newFilters.startDate.toDateString())
      const secondDate = new Date(newFilters.finalDate.toDateString())
      // eslint-disable-next-line array-callback-return
      newRegistries = newRegistries.filter((item) => {
        const newDate = new Date(item.initialDate)
        if (secondDate <= newDate && newDate <= firstDate) {
          return item
        }
      })
    }
    setFiltedRegistries(newRegistries)
  }

  const handleFiltersInput = (event: React.ChangeEvent<HTMLInputElement> | Date, dateName?: string): void => {
    if (event instanceof Date && dateName != null) {
      const newFilters = {
        ...filters,
        [dateName]: event
      }
      applyFilters(newFilters)
      setFilters(newFilters)
    } else if (!(event instanceof Date)) {
      const { value, name } = event.target
      const newFilters = {
        ...filters,
        [name]: value
      }
      applyFilters(newFilters)
      setFilters(newFilters)
    }
  }

  const context: ContextType = useMemo(() => (
    {
      registries,
      filters,
      handleFiltersInput,
      loading,
      error,
      addRegistry,
      startDate,
      setStartDate,
      filtedRegistries,
      modalIsOpen,
      setModalIsOpen,
      editRegistryById,
      removeRegistryById,
      setFilters,
      applyFilters
    }
  ), [registries, filters, handleFiltersInput, loading,
    error, addRegistry])

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>

  )
}
