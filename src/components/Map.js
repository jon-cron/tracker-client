import React, {useContext} from 'react';
import { Text, StyleSheet, ActivityIndicator  } from 'react-native';
// NOTE this is now a dep you must install 'npx install react-native-maps'
import MapView, {Polyline, Circle} from "react-native-maps";
import {Context as LocationContext} from '../context/LocationContext.js'

const Map = () => {
const {state: {currentLocation}} = useContext(LocationContext)
// NOTE foreground location tracking is the ability to use the users location when the app is open, Background location tracking is all the time. react-native udemy Video-236
// console.log(state)

  if(!currentLocation){
    return <ActivityIndicator size="large" style={{marginTop: 20}} />
  }
  const initialLocation = {
    longitude: -116.2733332,
    latitude: 43.5958812
  }

return <MapView 
  style={styles.map}
  // NOTE this is the initial map location upon load
  initialRegion={{
    ...initialLocation,
    latitudeDelta:0.02,
    longitudeDelta:0.02
    // NOTE the first two are the location, the second two are the amount of zoom
    // latitude: 43.620210,
    // longitude: -116.202458,
    // latitudeDelta:0.1,
    // longitudeDelta:0.1
  }}
  // NOTE this will move the map as the user moves
  // region={{
  //   ...currentLocation.coords,
  //   latitudeDelta:0.02,
  //   longitudeDelta:0.02
  // }}
  >
    <Circle
    center={currentLocation.coords}
    radius={50}
    strokeColor="rgba(158,158,255,1.0)"
    fillColor="rgba(158,158,255,0.3)"
    />
  </MapView>
};

const styles = StyleSheet.create({
map: {
  height: 300
}
});


export default Map;
// NOTE bad
// const startWatching = async () => {
//   try {
//     await requestPermissionsAsync();
//   } catch (e) {
//     setErr(e);
//   }
// };
// NOTE better
// const startWatching = async () => {
//   try {
//     const { granted } = await requestPermissionsAsync();
//     if (!granted) {
//       throw new Error('Location permission not granted');
//     }
//   } catch (e) {
//     setErr(e);
//   }
// };
// import { requestForegroundPermissionsAsync } from 'expo-location';
// const { granted } = await requestForegroundPermissionsAsync();