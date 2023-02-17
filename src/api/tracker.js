import axios from 'axios'

export const trackerApi = axios.create({
  // NOTE if you are having trouble go back to video 211 and try using ngrok
  baseURL: "http://localhost:3000/"
})