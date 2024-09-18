import React, { FC, useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { IconButton, MD3Colors } from 'react-native-paper'

import ds from '@utils/ds'

type PropsT = {
  handleAddProduct: (title: string) => void
}

const AddProduct: FC<PropsT> = ({ handleAddProduct }): React.JSX.Element => {
  const [title, setTitle] = useState('')

  const onAddProduct = () => {
    if (!!title) {
      handleAddProduct(title)
      setTitle('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="What is your next product?"
      />

      <IconButton
        icon="plus"
        iconColor={!!title ? MD3Colors.primary10 : MD3Colors.secondary70}
        size={28}
        onPress={onAddProduct}
        style={styles.icon}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    paddingHorizontal: 8,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 6,
    width: ds.w - 16,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: MD3Colors.neutral60,
    height: 40,
  },
  icon: {
    position: 'absolute',
    right: 4,
    top: 0,
    width: 24,
    height: 24,
  },
})

export default AddProduct
