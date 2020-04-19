import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { margin, screen } from '../helper'

export default ({ route: { params } }) => {

  console.log(params)
  return (
    <View style={styles.container}>
      <Image
        heigh={120}
        width={160}
        source={require('../assets/anj.jpeg')} />
      <View
        style={styles.button}>
        <Text style={styles.textButton}>{JSON.stringify(params.item.cords.join(','))}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    paddingVertical: margin.m1,
    width: screen.width * 3 / 4,
    backgroundColor: '#DDD',
    marginTop: margin.m1,
    borderRadius: margin.m1 * .25
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  }
})