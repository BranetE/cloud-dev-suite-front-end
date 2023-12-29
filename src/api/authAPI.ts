import { LoginType, LoginRequest, RegisterRequest } from "types/AuthTypes"
import { instance } from "./axiosConfig"

export const authAPI = {
    login(request: LoginRequest) {
        return instance.post<LoginType>('/auth/login', request)
    },
    
    register(request: RegisterRequest){
        return instance.post('/auth/register', request)
    }
}