// import axios from 'axios'

// export const trackerApi = axios.create({
//   // NOTE if you are having trouble go back to video 211 and try using ngrok
//   baseURL: "http://localhost:3000/"
// })
import axios from "axios";

export default axios.create({
  baseURL: ' http://feb7-75-174-192-122.ngrok.io'
})

// NOTE npm install -g ngrok then ngrok http 3000 to connect the link to localhost3000