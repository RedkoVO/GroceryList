import * as React from 'react'
import {
  StyleSheet,
  Text,
  TextProps as TextProperties,
  TextStyle,
} from 'react-native'

export interface TextProps extends TextProperties {
  children?: React.ReactNode

  mb?: number
  mt?: number
  ml?: number
  mr?: number
  pb?: number
  pt?: number
  pl?: number
  pr?: number
  op?: number

  color?: string

  ta?: TextStyle['textAlign']
  fs?: TextStyle['fontSize']
  lh?: TextStyle['lineHeight']
  fw?: TextStyle['fontWeight']
  ls?: TextStyle['letterSpacing']

  tdl?: TextStyle['textDecorationLine']

  style?: TextStyle

  ttm?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'

  text?: string
}

export const Typography = (props: TextProps) => {
  const {
    ta = 'center',
    fs = 14,
    lh = 21,
    fw = '400',
    ls = 0,
    color = '#1B1B1C',
    tdl = 'none',
    ttm = 'none',
    op = 1,
    mb,
    mt,
    ml,
    mr,
    pb,
    pt,
    pl,
    pr,
    style: styleOverride = {},
    text,
    children,
    ...rest
  } = props

  const style = StyleSheet.create<any>([
    { textAlign: ta },
    { fontSize: fs },
    { lineHeight: lh },
    { fontWeight: fw },
    { letterSpacing: ls },
    { textDecorationLine: tdl },
    { color },
    { marginBottom: mb },
    { marginTop: mt },
    { marginLeft: ml },
    { marginRight: mr },
    { paddingBottom: pb },
    { paddingTop: pt },
    { paddingLeft: pl },
    { paddingRight: pr },
    { opacity: op },
    { textTransform: ttm },

    { ...styleOverride },
  ])

  return (
    <Text {...rest} style={style}>
      {children}
    </Text>
  )
}

export default Typography
