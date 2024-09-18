import { useCallback } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import {
  getProducts,
  createProduct,
  removeProduct,
  updateProductTitle,
  updateProductCounter,
  updateProductCheckbox,
} from '@services/api/api'
import {
  IProduct,
  TitleDataT,
  ProductDataT,
  CounterDataT,
  CheckboxDataT,
} from '@models/products'

export const useGroceryList = (): {
  products: IProduct[]
  handleAddProduct: (title: string) => void
  handleRemoveProduct: (id: string) => void
  handleUpdateCounter: (data: CounterDataT) => void
  handleUpdateCheckbox: (data: CheckboxDataT) => void
  handleUpdateTitle: (data: TitleDataT) => void
} => {
  const queryClient = useQueryClient()

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await getProducts()
      return res.data
    },
    initialData: [],
  })

  // Query methods
  const addProductMutation = useMutation({
    mutationFn: (newProduct: ProductDataT) => createProduct(newProduct),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })

  const removeProductMutation = useMutation({
    mutationFn: (id: string) => removeProduct(id),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })

  const updateCounterMutation = useMutation({
    mutationFn: (data: CounterDataT) => updateProductCounter(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })

  const updateCheckboxMutation = useMutation({
    mutationFn: (data: CheckboxDataT) => updateProductCheckbox(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })

  const updateTitleMutation = useMutation({
    mutationFn: (data: TitleDataT) => updateProductTitle(data),
    onSettled: () => queryClient.invalidateQueries({ queryKey: ['products'] }),
  })

  // Handle methods
  const handleAddProduct = useCallback((title: string) => {
    addProductMutation.mutate({ title, count: 1, isDone: false })
  }, [])

  const handleRemoveProduct = useCallback((id: string) => {
    removeProductMutation.mutate(id)
  }, [])

  const handleUpdateCounter = useCallback((data: CounterDataT) => {
    updateCounterMutation.mutate(data)
  }, [])

  const handleUpdateCheckbox = useCallback((data: CheckboxDataT) => {
    updateCheckboxMutation.mutate(data)
  }, [])

  const handleUpdateTitle = useCallback((data: TitleDataT) => {
    updateTitleMutation.mutate(data)
  }, [])

  return {
    products,
    handleAddProduct,
    handleUpdateTitle,
    handleRemoveProduct,
    handleUpdateCounter,
    handleUpdateCheckbox,
  }
}
