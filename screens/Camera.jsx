import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'


export default props => {
  const { route: { params }, navigation: { navigate } } = props
  const [cameraRef, setCameraRef] = useState(null)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync()
      if (photo) {
        dispatch({ type: 'SAVE_DATA', payload: { date: new Date().getTime(), cords: [params.lat, params.lng] } })
        navigate('Preview', { photo })
      }
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={ref => { setCameraRef(ref) }}
        style={{ flex: 1 }}
        type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>

          <TouchableOpacity
            onPress={snap}
            style={{ marginBottom: 56 }}>
            <Ionicons
              name="md-camera"
              size={56}
              color="green" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}