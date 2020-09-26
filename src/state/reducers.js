import {combineReducers} from "redux"

const backgroundReducer = (state=null, action) => {
  switch(action.type){
    case "SETBACKGROUND":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  background: backgroundReducer
})

export default rootReducer
