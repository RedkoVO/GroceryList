import React, { FC, useState, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { Checkbox, Divider, IconButton, MD3Colors } from 'react-native-paper'

import { TitleDataT, CounterDataT, CheckboxDataT } from '@models/products'
import Counter from './Counter'
import Title from './Title'

type PropsT = {
  id: string
  title: string
  count: number
  isDone: boolean
  handleRemoveProduct: (id: string) => void
  handleUpdateCounter: (data: CounterDataT) => void
  handleUpdateCheckbox: (data: CheckboxDataT) => void
  handleUpdateTitle: (data: TitleDataT) => void
}

const ProductItem: FC<PropsT> = ({
  id,
  title,
  count,
  isDone,
  handleRemoveProduct,
  handleUpdateCounter,
  handleUpdateCheckbox,
  handleUpdateTitle,
}): React.JSX.Element => {
  const [editMode, setEditMode] = useState(false)

  const onRemove = useCallback(() => {
    handleRemoveProduct(id)
  }, [])

  const onIncreaseCounter = useCallback(() => {
    handleUpdateCounter({ id, count: count + 1 })
  }, [count])

  const onDecreaseCounter = useCallback(() => {
    if (count > 1) {
      handleUpdateCounter({ id, count: count - 1 })
    }
  }, [count])

  const onUpdateCheckbox = useCallback(() => {
    handleUpdateCheckbox({ id, isDone: !isDone })
  }, [isDone])

  const onEditTitle = useCallback(() => {
    setEditMode(e => !e)
  }, [])

  return (
    <>
      <View style={styles.container}>
        <Checkbox.Android
          status={isDone ? 'checked' : 'unchecked'}
          onPress={onUpdateCheckbox}
        />

        <Title
          id={id}
          title={title}
          isDone={isDone}
          editMode={editMode}
          setEditMode={setEditMode}
          onEditTitle={onEditTitle}
          handleUpdateTitle={handleUpdateTitle}
        />

        <Counter
          count={count}
          onDecrease={onDecreaseCounter}
          onIncrease={onIncreaseCounter}
        />

        <IconButton
          icon="pencil"
          iconColor={MD3Colors.primary10}
          containerColor={MD3Colors.neutral90}
          size={16}
          onPress={onEditTitle}
          style={styles.actionIcon}
        />
        <IconButton
          icon="close"
          iconColor={MD3Colors.primary10}
          containerColor={MD3Colors.neutral90}
          size={20}
          onPress={onRemove}
          style={styles.actionIcon}
        />
      </View>
      <Divider />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  actionIcon: {
    width: 26,
    height: 26,
    margin: 0,
    marginLeft: 6,
  },
})

export default ProductItem
