export interface EmployeeType {
  id: number
  email: string
  firstName: string
  lastName: string
  position: string
  experience: string
}

export type EmployeeCompactType = {
  id: number
  firstName: string
  lastName: string
}

export interface EmployeeRegisterType extends EmployeeType {
  password: string
  confirmPassword: string
}
