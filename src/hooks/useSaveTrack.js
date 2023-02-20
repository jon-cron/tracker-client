import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext.js";
import { Context as LocationContext } from "../context/LocationContext.js";



export default () => {

  const { postTrack } = useContext(TrackContext)
  const {state: {locations, name}} = useContext(LocationContext)

  const saveTrack = () => {
    postTrack(name, locations.length);

  }
  return [saveTrack]

}