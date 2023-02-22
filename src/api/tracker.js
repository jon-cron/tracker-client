// export const trackerApi = axios.create({
//   // NOTE if you are having trouble go back to video 211 and try using ngrok
//   baseURL: "http://localhost:3000/"
// })
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://8fa9-75-174-192-122.ngrok.io'
});
// NOTE this code checks for the users Authentication upon any request made to the api
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log('please sign in')
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)



// NOTE npm install -g ngrok then ngrok http 3000 to connect the link to localhost3000