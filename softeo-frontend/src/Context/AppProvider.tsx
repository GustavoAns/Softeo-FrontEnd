/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { IRegistros, ContextType, APIRegistrosArry, Props } from '../images/RegistriesImages'

export const AppContext = createContext< ContextType | null >(null)

const API_URL = 'http://localhost:3001'

export const API = axios.create({
  baseURL: API_URL
})

// eslint-disable-next-line react/prop-types
export const ContactsProvider: React.FC<Props> = ({ children }) => {
  const [registries, setRegistries] = useState<IRegistros[]>([])
  const [nameSearch, setNameSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const fetchRegistries = useCallback(async (): Promise<void> => {
    setLoading(true)
    setError(false)

    try {
      const pyload: APIRegistrosArry = await API.get('/')
      if (pyload.data) {
        setRegistries(pyload.data)
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

  useEffect(() => {
    void fetchRegistries()
  }, [fetchRegistries])

  const context: ContextType = useMemo(() => (
    {
      registries,
      nameSearch,
      setNameSearch,
      loading,
      error,
      addRegistry
    }
  ), [registries, nameSearch, setNameSearch, loading,
    error, addRegistry])

  // const context: TodoContextType = {
  //   registries,
  //   nameSearch,
  //   setNameSearch,
  //   loading,
  //   error
  // }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>

  )
}
