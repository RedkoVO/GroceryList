import React, { FC } from 'react'
import {
  FlatList,
  Platform,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native'

import { ProductItem, AddProduct } from '@components'
import { useGroceryList } from './useGroceryList'

const GroceryList: FC = (): React.JSX.Element => {
  const {
    products,
    handleAddProduct,
    handleUpdateTitle,
    handleRemoveProduct,
    handleUpdateCounter,
    handleUpdateCheckbox,
  } = useGroceryList()

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{}}>
        <AddProduct handleAddProduct={handleAddProduct} />

        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductItem
              id={item.id}
              title={item.title}
              count={item.count}
              isDone={item.isDone}
              handleRemoveProduct={handleRemoveProduct}
              handleUpdateCounter={handleUpdateCounter}
              handleUpdateCheckbox={handleUpdateCheckbox}
              handleUpdateTitle={handleUpdateTitle}
            />
          )}
          contentContainerStyle={styles.list}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 80,
  },
})

export default GroceryList
