// NOTE this file allows files that are not components to utilize navigation
import { NavigationAction } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav
}

export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationAction.navigate({
      routeName,
      params
    })
  )
}