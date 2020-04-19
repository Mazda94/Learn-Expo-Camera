import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { client, margin } from '../helper'
import moment from 'moment'

export default props => {

  const [covid, setCovid] = useState(null)

  useEffect(() => {
    client.get()
      .then(({ data }) => {
        setCovid(data.features)
      })
      .catch(err => console.log(err))

    return () => {

    }
  }, [])

  if (!covid) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {!covid && <Text>Getting data</Text>}
      {covid && covid.map((el, index) => {
        const key = Object.keys(el.attributes)
        const value = Object.values(el.attributes)
        return (
          key.map((label, index) => <Text style={styles.item}>{label} : {label.toLowerCase() == 'last_update' ? moment(value[index]).format('llll') : value[index]}</Text>)
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  item: {
    marginHorizontal: margin.m2,
    padding: margin.m1,
    borderRadius: margin.m1 * .25,
    backgroundColor: '#DDD',
    marginTop: margin.m1 * .5
  }
})