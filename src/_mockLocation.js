import * as Location from 'expo-location';


const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 1000000000,
      coords: {
        speed: 0,
        heading: 0,
        accuracy: 0,
        speed: 0,
        altitudeAccuracy: 0,
        altitude: 0,
        longitude: -116.202458 + increment * tenMetersWithDegrees,
        latitude: 43.620210 + increment * tenMetersWithDegrees
      }
  }
}
let counter = 0;
setInterval(() => {
Location.EventEmitter.emit('Expo.locationChanged', {
  watchId: Location._getCurrentWatchId(),
  location: getLocation(counter)
});
counter++
}, 1000)