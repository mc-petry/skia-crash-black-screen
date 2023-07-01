import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Board } from './src/components/board'

export default function App() {
  return (
    <View style={styles.container}>
      <Board />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2a8aa',
  },
})

registerRootComponent(App)
