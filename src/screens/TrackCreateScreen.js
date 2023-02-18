import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "../components/Map.js";
import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer.js";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import '../_mockLocation.js'
import { Context as LocationContext } from "../context/LocationContext.js";


const TrackCreateScreen = () => {
  const {addLocation} = useContext(LocationContext)
  const [error, setError] = useState(null)


const startWatching = async () => {
  try {
    const { granted } = await requestForegroundPermissionsAsync();
    await watchPositionAsync({
      // NOTE this can be altered to save the users battery life but if you need very specific location for your app make it very accurate as seen here 
      accuracy: Accuracy.BestForNavigation,
      // NOTE how often we are updating the users location in milliseconds
      timeInterval: 1000,
      // NOTE this tells expo to update the location if the user travels 10 meters before the timeInterval is met
      distanceInterval: 10
    }, (location) => {
      // NOTE this is taking the users current location and sending it to the context through this function
      addLocation(location)
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