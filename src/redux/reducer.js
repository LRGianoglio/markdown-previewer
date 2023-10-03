import { SET_HTML } from "./types";

const initialState = {
  html: ""
}

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_HTML:
      return {...state, html: action.payload}
    default:
      return {...state}
  }
}

export default rootReducer;