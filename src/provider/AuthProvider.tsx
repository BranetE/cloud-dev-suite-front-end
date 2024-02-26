import { instance } from 'api/axiosConfig'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { decodeToken } from 'util/decodeToken'

interface IAuthContext {
  token: string | null
  login: (token: string) => void
  logout: () => void
}

const INITIAL_VALUE: IAuthContext = {
  token: null,
  login: () => {},
  logout: () => {},
}

const AuthContext = createContext<IAuthContext>(INITIAL_VALUE)

interface IAuthProvider {
  children?: ReactNode
}

export function AuthProvider({ children }: IAuthProvider): JSX.Element {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      instance.defaults.headers.common['Authorization'] = 'Bearer ' + token
    } else {
      delete instance.defaults.headers.common['Authorization']
      localStorage.removeItem('token')
    }
  }, [token])

  const login = (token: string) => {
    setToken(token)
    const { id } = decodeToken(token)
    navigate(`/employee/${id}`)
  }
  const logout = () => {
    setToken(null)
  }

  const contextValue = useMemo(
    () => ({
      token,
      login,
      logout,
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
