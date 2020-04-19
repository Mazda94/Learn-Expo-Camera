import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home';
import Camera from './screens/Camera';
import ListData from './screens/ListData';
import Covid from './screens/Covid';
import ImagePreview from './screens/Image';
import * as Location from 'expo-location';
import Preview from './screens/Preview';
import store from './store';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    })()
  }, [])


  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Camera"
            options={{
              headerShown: false
            }}
            initialParams={location}
            component={Camera} />
          <Stack.Screen name="List Data" component={ListData} />
          <Stack.Screen name="Covid" component={Covid} />
          <Stack.Screen name="Preview" component={Preview} />
          <Stack.Screen name="Image" component={ImagePreview} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}