import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')

const intro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height
  },
  image: {
    flex: 1,
    width,
    height
  },
  buttonPlacement: {
    flexDirection: 'row',
    paddingTop: ((height/8) *5)
  },
  text: {
    paddingLeft: 5,
    fontSize: 20,
    color: 'black'
  }
})

export default { intro }