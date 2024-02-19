import { instance } from 'api/axiosConfig'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { jwtDecode } from 'jwt-decode'

interface IAuthContext {
  token: string | null
  setToken: (newToken: string) => void
}

const INITIAL_VALUE: IAuthContext = {
  token: '',
  setToken: () => {},
}

const AuthContext = createContext<IAuthContext>(INITIAL_VALUE)

interface IAuthProvider {
  children?: ReactNode
}

export function AuthProvider({ children }: IAuthProvider): JSX.Element {
  const [token, setToken_] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    } else {
      delete instance.defaults.headers.common['Authorization']
      localStorage.removeItem('token')
    }
  }, [token])

  const setToken = (newToken: string) => {
    setToken_(newToken)
  }

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

interface ILoggedIn {
  id: string
  position: string
  sub: string
}

export const useGetLoggedIn = () => {
  const { token } = useContext(AuthContext)

  if (token) {
    return jwtDecode<ILoggedIn>(token)
  } else {
    return { id: '0', position: '', sub: '' }
  }
}
