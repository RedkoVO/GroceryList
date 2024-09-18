import { Dimensions } from 'react-native'

const h = Dimensions.get('window').height
const w = Dimensions.get('window').width
const hp = (percent: number) => (Dimensions.get('window').height / 100) * percent
const wp = (percent: number) => (Dimensions.get('window').width / 100) * percent

export default {
  h,
  w,
  hp,
  wp,
}
