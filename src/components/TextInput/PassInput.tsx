import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './PassInputStyle'

interface PassInputProps {
  pass: string
}

export function PassInput(props: PassInputProps) {
  return <TextInput style={styles.inputer} placeholder='password' value={props.pass}/>
}
