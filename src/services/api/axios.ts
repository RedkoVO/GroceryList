import axios from 'axios'

import { URL } from '@constants/api'

const axiosInstance = axios.create({
  baseURL: URL,
})

axiosInstance.interceptors.request.use(
  async config => {
    //@ts-ignore
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      Accept: '*/*',
      'Content-Type': 'application/json',
      ...config.headers,
    }

    return config
  },
  error => {
    if (axios.isCancel(error)) {
      console.log('all request errors cancelled', error)
    } else {
      return Promise.reject(error)
    }
  },
)

axiosInstance.interceptors.response.use(
  async response => {
    return response
  },
  async error => {
    return Promise.reject(error)
  },
)

export default axiosInstance
