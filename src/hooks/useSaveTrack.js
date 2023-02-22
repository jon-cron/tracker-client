import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext.js";
import { Context as LocationContext } from "../context/LocationContext.js";



export default () => {

  const { postTrack } = useContext(TrackContext)
  const {state: {name, locations}} = useContext(LocationContext)

  const saveTrack = () => {
    postTrack(name, locations);
  }
  return [saveTrack]

}