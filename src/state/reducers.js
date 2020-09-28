import {combineReducers} from "redux"

import {basicTheme} from "../Assets/ThemePacks"


const backgroundReducer = (state=basicTheme.background, action) => {
  switch(action.type){
    case "SETTHEME":
      return action.payload.background
    default:
      return state
  }
}

const headerReducer = (state=basicTheme.header, action) => {
  switch(action.type){
    case "SETTHEME":
      return action.payload.header
    default:
      return state
  }
}

const bodyReducer = (state=basicTheme.body, action) => {
  switch(action.type){
    case "SETTHEME":
      return action.payload.body
    default:
      return state
  }
}

const inputReducer = (state=basicTheme.input, action) => {
  switch(action.type){
    case "SETTHEME":
      return action.payload.input
    default:
      return state
  }
}

const nameReducer = (state=basicTheme.name, action) => {
  switch(action.type){
    case "SETTHEME":
      return action.payload.name
    default:
      return state
  }
}

const buttonReducer = (state=basicTheme.frontPageLinkColors, action) => {
  switch(action.type){
    case "SETTHEME":
      return action.payload.frontPageLinkColors
    default:
      return state
  }
}

const rootReducer = combineReducers({
  name: nameReducer,
  background: backgroundReducer,
  header: headerReducer,
  body: bodyReducer,
  input: inputReducer,
  buttons: buttonReducer
})

export default rootReducer
