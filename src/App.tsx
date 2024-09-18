import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import GroceryList from '@screens/GroceryList'

const App = (): React.JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <GroceryList />
    </QueryClientProvider>
  )
}

export default App
