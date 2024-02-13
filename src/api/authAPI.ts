import { LoginType, LoginRequest, RegisterRequest } from "types/AuthTypes";
import { instance } from "./axiosConfig";

export const authAPI = {
  login(request?: LoginRequest) {
    return instance
      .post<LoginType>("/auth/login", request)
      .catch((error) => console.error(error));
  },

  register(request: RegisterRequest) {
    return instance
      .post("/auth/register", request)
      .catch((error) => console.error(error));
  },
};
