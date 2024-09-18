import React, { FC } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, MD3Colors } from 'react-native-paper'

import { Typography } from '@components'

type PropsT = {
  count: number
  onDecrease: () => void
  onIncrease: () => void
}

const Counter: FC<PropsT> = ({
  count,
  onDecrease,
  onIncrease,
}): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDecrease}>
        <Icon source="menu-left" color={MD3Colors.primary10} size={25} />
      </TouchableOpacity>

      <Typography fs={16}>{count}</Typography>

      <TouchableOpacity onPress={onIncrease}>
        <Icon source="menu-right" color={MD3Colors.primary10} size={25} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
  },
})

export default Counter
