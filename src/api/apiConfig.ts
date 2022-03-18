import axios, { AxiosResponse } from 'axios'
import { authApi, AuthResponse } from './authApi'
export const instance = axios.create({
  withCredentials: true,
  baseURL:process.env.REACT_APP_API_URL
})

export enum ResultStatus {
  Success = 'success',
  Errror = 'error',
}

export type ApiResponseType<D> = {
  status: ResultStatus
  results: number
  data: D
}


instance.interceptors.response.use((config) => {
  return config;
},async (error) => {
  const originalRequest = error.config;
  if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
          const response = await authApi.fetchAuthData()
          localStorage.setItem('token', response.token);
          return instance.request(originalRequest);
      } catch (e) {
          console.log('НЕ АВТОРИЗОВАН')
      }
  }
  throw error;
})
