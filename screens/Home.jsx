import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { margin, screen } from '../helper'

export default ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Image
        heigh={120}
        width={160}
        source={require('../assets/anj.jpeg')} />
      <TouchableOpacity
        onPress={() => navigate('Camera')}
        style={styles.button}>
        <Text style={styles.textButton}>Take a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('List Data')}
        style={styles.button}>
        <Text style={styles.textButton}>List Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate('Covid')}
        style={styles.button}>
        <Text style={styles.textButton}>Covid-19</Text>
      </TouchableOpacity>
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