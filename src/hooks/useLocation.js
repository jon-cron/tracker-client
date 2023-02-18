import {useState, useEffect} from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';


export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      const sub = await watchPositionAsync({
        // NOTE this can be altered to save the users battery life but if you need very specific location for your app make it very accurate as seen here 
        accuracy: Accuracy.BestForNavigation,
        // NOTE how often we are updating the users location in milliseconds
        timeInterval: 1000,
        // NOTE this tells expo to update the location if the user travels 10 meters before the timeInterval is met
        distanceInterval: 10
      }, (location) => {
        // NOTE this is taking the users current location and sending it to the context through this function
        callback(location)
      })
      setSubscriber(sub)
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (error) {
      setError(error);
    }
  };
// NOTE if the [] in useEffect is blank the function will only run once upon page load, but if we throw a variable in the [] useEffect will look for a change everytime the function runs
  useEffect(()=> {
    if(shouldTrack){
      startWatching();
    } else {
      subscriber.remove()
      setSubscriber(null)
    }
  }, [shouldTrack])

  return [error]
}