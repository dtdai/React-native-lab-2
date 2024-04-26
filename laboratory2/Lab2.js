import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper'
import BottomTabNav from './routers/BottomTabNav'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { version } from 'react'

export default function Lab2() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider theme={{ version: 2 }}>
          <BottomTabNav />
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}