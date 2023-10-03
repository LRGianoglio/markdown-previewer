import {SET_HTML, MINIMIZE_EDITOR, MAXIMIZE_EDITOR, MINIMIZE_PREVIEWER, MAXIMIZE_PREVIEWER} from './types';

const setInnerHTML = (text) =>{
  return(dispatch) => {
    dispatch({type: SET_HTML, payload: text})
  }
}

const minimizeEditor = () =>{
  return(dispatch) => {
    dispatch({type: MINIMIZE_EDITOR})
  }
}

const maximizeEditor = () =>{
  return(dispatch) => {
    dispatch({type: MAXIMIZE_EDITOR})
  }
}

const minimizePreviewer = () =>{
  return(dispatch) => {
    dispatch({type: MINIMIZE_PREVIEWER})
  }
}

const maximizePreviewer = () =>{
  return(dispatch) => {
    dispatch({type: MAXIMIZE_PREVIEWER})
  }
}

export {
  setInnerHTML,
  minimizeEditor,
  maximizeEditor,
  minimizePreviewer,
  maximizePreviewer
}