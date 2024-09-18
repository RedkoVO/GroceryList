import React, { FC, useState, useCallback } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { IconButton, MD3Colors } from 'react-native-paper'

import { TitleDataT } from '@models/products'
import { Typography } from '@components'
import ds from '@utils/ds'

type PropsT = {
  id: string
  title: string
  isDone: boolean
  editMode: boolean
  setEditMode: (v: boolean) => void
  onEditTitle: () => void
  handleUpdateTitle: (data: TitleDataT) => void
}

const Title: FC<PropsT> = ({
  id,
  title,
  isDone,
  editMode,
  setEditMode,
  onEditTitle,
  handleUpdateTitle,
}): React.JSX.Element => {
  const [newTitle, setNewTitle] = useState(title)

  const onChangeTitle = useCallback(() => {
    handleUpdateTitle({ id, title: newTitle })
    setEditMode(false)
  }, [newTitle])

  return (
    <>
      {editMode ? (
        <View>
          <TextInput
            style={styles.input}
            onChangeText={setNewTitle}
            value={newTitle}
          />

          <View style={styles.inputButtons}>
            <IconButton
              icon="check"
              iconColor={MD3Colors.primary10}
              containerColor={MD3Colors.neutral90}
              size={16}
              onPress={onChangeTitle}
              style={styles.actionIcon}
            />
            <IconButton
              icon="cancel"
              iconColor={MD3Colors.error50}
              containerColor={MD3Colors.neutral90}
              size={20}
              onPress={onEditTitle}
              style={styles.actionIcon}
            />
          </View>
        </View>
      ) : (
        <Typography
          ta="left"
          ml={10}
          tdl={isDone ? 'line-through' : 'none'}
          style={styles.title}>
          {title}
        </Typography>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    width: ds.w - 194,
  },
  actionIcon: {
    width: 26,
    height: 26,
    margin: 0,
    marginLeft: 6,
  },
  input: {
    paddingVertical: 6,
    paddingHorizontal: 6,
    marginLeft: 10,
    width: ds.w - 194,
    backgroundColor: MD3Colors.neutral95,
    borderRadius: 6,
  },
  inputButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingLeft: 6,
  },
})

export default Title
