import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default ({ navigation: { navigate } }) => {
  const { data } = useSelector(state => state)
  return (
    <View>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#DDD' }} />}
        renderItem={(item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigate('Image', item)}>
              <Text
                style={{
                  padding: 24,
                  fontSize: 18,
                  fontWeight: '500'
                }}>{moment(item.date).format('DD-MM-YYYY hh:mm:ss')}</Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}