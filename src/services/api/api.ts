import axios from './axios'

import {
  TitleDataT,
  ProductDataT,
  CounterDataT,
  CheckboxDataT,
} from '@models/products'

export const getProducts = () => axios.get(`/products`)

export const createProduct = (data: ProductDataT) => axios.post('/products', data)

export const removeProduct = (id: string) => axios.delete(`/products/${id}`)

export const updateProductCounter = ({ id, count }: CounterDataT) =>
  axios.patch(`/products/${id}`, { count })

export const updateProductCheckbox = ({ id, isDone }: CheckboxDataT) =>
  axios.patch(`/products/${id}`, { isDone })

export const updateProductTitle = ({ id, title }: TitleDataT) =>
  axios.patch(`/products/${id}`, { title })
