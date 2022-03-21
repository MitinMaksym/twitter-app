import axios, { AxiosInstance } from 'axios'
import store from '../redux/store'
import { showError } from '../redux/ducks/error/errorSlice'
import { authApi } from './authApi'
import { logout } from '../redux/ducks/auth/sagas'
import { storage } from '../utils/utils'
export const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL
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

$api.interceptors.request.use((request) => {
const loginRequest = request.url?.endsWith("login")
  if (request.headers && !loginRequest ) {
    request.headers.Authorization = `Bearer ${storage('token')}`
  }
  return request;
})

export default function setupAxios(instance:AxiosInstance, appStore: typeof store) {

  instance.interceptors.response.use(
    (response) => {

      return response
    },
    async (err) => {
      const originalRequest = err.config;
      const shouldRefreshToken = err.response.status == 401 && 
                                 err.config && 
                                 !err.config._isRetry &&
                                 !originalRequest.url.endsWith("login")
   
      if (shouldRefreshToken) {
        originalRequest._isRetry = true;
        try {
          const response = await authApi.fetchAuthData()
          storage('token', response.token);
          return $api.request(originalRequest);
        } catch (e) {
          appStore.dispatch(logout())
        }
      }

      const message = err.response.data.message || err.statusText
      appStore.dispatch(showError({ title: 'Error', message: message }))
      return Promise.reject(err)
    }
  )
}