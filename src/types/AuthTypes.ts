export type LoginType = {
  accessToken: string;
  refreshToken?: string;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  firstName: string;
  lastName: string;
  position: string;
  experience: string;
  password: string;
}
