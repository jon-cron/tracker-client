import React, {useEffect, useState} from 'react';
import {StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map.js";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer.js";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import '../_mockLocation.js'


const TrackCreateScreen = () => {
  const [error, setError] = useState(null)


const startWatching = async () => {
  try {
    const { granted } = await requestForegroundPermissionsAsync();
    await watchPositionAsync({
      // NOTE this can be altered to save the users battery life but if you need very specific location for your app make it very accurate as seen here 
      accuracy: Accuracy.BestForNavigation,
      // NOTE how often we are updating the users location in milli
      timeInterval: 1000
    })
    if (!granted) {
      throw new Error('Location permission not granted');
    }
  } catch (error) {
    setError(error);
  }
};
useEffect(()=> {
  startWatching();
}, [])

return (
  <SafeAreaView forceInset={{top: "always"}}>
    <Spacer/>
    <Spacer>
    <Text h3>Create Track</Text>
    <Map/>
    {error? <Text>Please enable location services</Text> : null}
    </Spacer>
  </SafeAreaView>
)
};

const styles = StyleSheet.create({

});


export default TrackCreateScreen;