import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { maximizeEditor, minimizeEditor, setInnerHTML } from '../redux/actions';

function Editor() {

  const dispatch = useDispatch();

  const innerText = useSelector((state) => state.html);
  const editorDisplay = useSelector((state) => state.editorDisplay);
  const previewerDisplay = useSelector((state) => state.previewerDisplay)

  const handleTyping = (event) => {
    dispatch(setInnerHTML(event.target.value))
  }

  const handleMinMax = () => {
    editorDisplay ?
      dispatch(minimizeEditor()) :
      dispatch(maximizeEditor())
  }

  //! -------------------------ESTILOS----------------------------------

  let styles = {
    mainDiv: "h-5/6 w-5/12 border-teal-500 border-2 shadow-2xl transition-all ease-in-out duration-200",
    toolbar: "h-10 bg-teal-900 flex border-b-2 border-teal-500 justify-between items-center px-4 font-semibold text-teal-500",
    window: "h-window w-full bg-slate-800"
  }

  let width =
    previewerDisplay ?
      "w-5/12" : "w-5/6"

  if(editorDisplay){
    styles = {
      mainDiv: `h-5/6 border-teal-500 border-2 shadow-2xl transition-all ease-in-out duration-200 ${width}`,
      toolbar: "h-10 bg-teal-900 flex border-b-2 border-teal-500 justify-between items-center px-4 font-semibold text-teal-500",
      window: "h-window w-full bg-slate-800"
    }
  } else {
    styles = {
      mainDiv: "h-24 w-24 bg-teal-900 shadow-2xl transition-all ease-in-out duration-200 fixed left-0 top-1/2 transform -translate-y-1/2 rounded-tr-xl rounded-br-xl",
      toolbar: "h-24 w-24 bg-teal-900 flex flex-col justify-evenly items-center px-4 font-semibold text-teal-500 rounded-tr-xl rounded-br-xl",
      window: "hidden"
    }
  }

  //! ------------------------------------------------------------------

  return (
    <div className={styles.mainDiv}>
      <div className={styles.toolbar}>
        <p className='text-xl'>Editor</p>
        <button onClick={handleMinMax}>
          {editorDisplay ? <BsArrowBarLeft className='text-2xl'/> : <BsArrowBarRight className='text-2xl'/>}
        </button>
      </div>
      <div className={styles.window}>
        <textarea cols="30" rows="10" value={innerText} onChange={handleTyping} className='w-full h-full bg-slate-800 text-slate-200 p-4'></textarea>
      </div>
    </div>
  );
}

export default Editor;