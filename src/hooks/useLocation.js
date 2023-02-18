import {useState, useEffect} from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';


export default (callback) => {
  const [error, setError] = useState(null);

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
        callback
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

  return [error]
}