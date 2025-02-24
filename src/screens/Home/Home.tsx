import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { styles } from './HomeStyle'
import { Logo } from '../../components/Logo/Logo'
import { PassInput } from '../../components/TextInput/PassInput'
import { PassGenButton } from '../../components/PassGenButton/PassGenButton'

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <PassGenButton />
      </View>
      <StatusBar style='light' />
    </View>
  )
}
