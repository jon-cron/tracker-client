import React, {useEffect, useState} from 'react';
import {StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map.js";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer.js";
import { requestForegroundPermissionsAsync } from 'expo-location';


const TrackCreateScreen = () => {
  const [error, setError] = useState(null)


const startWatching = async () => {
  try {
    const { granted } = await requestForegroundPermissionsAsync();
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