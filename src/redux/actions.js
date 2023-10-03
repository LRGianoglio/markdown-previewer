import {SET_HTML} from './types';

const setInnerHTML = (text) =>{
  return(dispatch) => {
    dispatch({type: SET_HTML, payload: text})
  }
}

export {
  setInnerHTML
}