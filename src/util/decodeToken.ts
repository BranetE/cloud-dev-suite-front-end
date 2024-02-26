import { jwtDecode } from 'jwt-decode'
import { useAuth } from 'provider/AuthProvider'

export interface IAuthenticatedEmployeeInfo {
  id: string
  position: string
  sub: string
}

export const useDecodeJwtToken = (): IAuthenticatedEmployeeInfo => {
  const { token } = useAuth()
  if (token) return decodeToken(token)
  else throw new Error('There is no token')
}

export const decodeToken = (token: string): IAuthenticatedEmployeeInfo => {
  return jwtDecode<IAuthenticatedEmployeeInfo>(token)
}
