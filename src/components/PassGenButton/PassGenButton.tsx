import React from 'react'
import { View, Button, Text, Pressable } from 'react-native'
import * as Clipboard from 'expo-clipboard'

import { styles } from './PassGenButtonStyle'
import { PassInput } from '../TextInput/PassInput'
import generate from '../../services/passGenService'

export function PassGenButton() {
  const [ pass, setPass ] = React.useState('')

  function handleGenButton() {
    let genToken = generate()
    setPass(genToken)
  }

  function handleCopy() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <PassInput pass={pass} />
      <View style={styles.container}>
        <Pressable style={styles.text} onPress={handleGenButton}>
          <Text>🔐 Generate password</Text>
        </Pressable>

        <Pressable style={styles.text} onPress={handleCopy}>
          <Text>Copy</Text>
        </Pressable>
      </View>
    </>
  )
}
