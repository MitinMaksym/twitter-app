import axios from 'axios'
import { UserLoginCredentials } from '../components/auth/SignInModal'
import { User } from '../types'
import { ApiResponseType, instance } from './apiConfig'

export type AuthResponse = {
  token: string
  user: User
}

export const authApi = {
  async fetchAuthData(): Promise<AuthResponse>{
    const res = await axios
      .post<ApiResponseType<AuthResponse>>(
        `${process.env.REACT_APP_API_URL}/users/refreshToken`
      )
        return res.data.data
  },

  async login(payload: UserLoginCredentials):Promise<AuthResponse> {
    const res = await instance
      .post<ApiResponseType<AuthResponse>>(`${process.env.REACT_APP_API_URL}/users/login`, { ...payload })
      return res.data.data
  },
  
  async logout():Promise<null> {
    const res = await instance
      .post<ApiResponseType<null>>('users/logout')
      return res.data.data
  }
}

