import {useState, useEffect} from 'react'
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { sub } from "react-native-reanimated";


export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  // const [subscriber, setSubscriber] = useState(null)


// NOTE if the [] in useEffect is blank the function will only run once upon page load, but if we throw a variable in the [] useEffect will look for a change every time the function runs
  useEffect(()=> {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        subscriber = await watchPositionAsync({
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
    if(shouldTrack){
      startWatching();
    } else {
      if(subscriber){
        subscriber.remove()
        // setSubscriber(null)
      }
        subscriber = null
    }
    return () => {
      if(subscriber){
        subscriber.remove()
      }
    };
  }, [shouldTrack, callback])

  return [error]
}