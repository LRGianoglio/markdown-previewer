import { SET_HTML, MINIMIZE_EDITOR, MAXIMIZE_EDITOR, MINIMIZE_PREVIEWER, MAXIMIZE_PREVIEWER } from "./types";

const initialState = {
  html: "",
  editorDisplay: true,
  previewerDisplay: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_HTML:
      return {...state, html: action.payload}
    case MINIMIZE_EDITOR:
      return {...state, editorDisplay: false, previewerDisplay: true}
    case MAXIMIZE_EDITOR:
      return {...state, editorDisplay: true}
    case MINIMIZE_PREVIEWER:
      return {...state, editorDisplay: true, previewerDisplay: false}
    case MAXIMIZE_PREVIEWER:
      return {...state, previewerDisplay: true}
    default:
      return {...state}
  }
}

export default rootReducer;