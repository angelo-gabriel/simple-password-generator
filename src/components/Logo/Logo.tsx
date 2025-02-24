import React from 'react'
import { View, Text, Image } from 'react-native'

import { styles } from './LogoStyle'
import icon from '../../../assets/icon.png'

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awesome Password Manager</Text>
      <Image
        source={icon}
        style={{
          resizeMode: 'contain',
          width: 200,
          height: 200,
        }}
      />
    </View>
  )
}
