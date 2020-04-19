import React from 'react'
import { View, Text, Image } from 'react-native'

export default ({ route: { params } }) => {
  return (
    <View>
      <Image
        height={240}
        width={480}
        source={{ uri: params.photo.uri }}
      />
    </View>
  )
}