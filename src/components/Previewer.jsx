import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { maximizePreviewer, minimizePreviewer } from '../redux/actions';
import { marked } from 'marked';

function Previewer() {

  const dispatch = useDispatch();

  marked.setOptions({
    breaks: true,
  })

  const innerText = useSelector((state) => state.html);
  const editorDisplay = useSelector((state) => state.editorDisplay);
  const previewerDisplay = useSelector((state) => state.previewerDisplay);

  const handleMinMax = () => {
    previewerDisplay ?
      dispatch(minimizePreviewer()) :
      dispatch(maximizePreviewer())
  }

    //! -------------------------ESTILOS----------------------------------

    let styles = {
      mainDiv: "h-5/6 w-5/12 border-teal-500 border-2 shadow-2xl transition-all ease-in-out duration-200",
      toolbar: "h-10 bg-teal-900 flex border-b-2 border-teal-500 justify-between items-center px-4 font-semibold text-teal-500",
      window: "h-window w-full bg-slate-800 overflow-y-scroll"
    }

    let width =
    editorDisplay ?
      "w-5/12" : "w-5/6"
  
    if(previewerDisplay){
      styles = {
        mainDiv: `h-5/6 w-5/12 border-teal-500 border-2 shadow-2xl transition-all ease-in-out duration-200 ${width}`,
        toolbar: "h-10 bg-teal-900 flex border-b-2 border-teal-500 justify-between items-center px-4 font-semibold text-teal-500",
        window: "h-window w-full bg-slate-800 overflow-y-scroll p-4"
      }
    } else {
      styles = {
        mainDiv: "h-24 w-24 bg-teal-900 shadow-2xl transition-all ease-in-out duration-200 fixed right-0 top-1/2 transform -translate-y-1/2 rounded-tl-xl rounded-bl-xl",
        toolbar: "h-24 w-24 bg-teal-900 flex flex-col justify-evenly items-center px-4 font-semibold text-teal-500 rounded-tl-xl rounded-bl-xl",
        window: "hidden"
      }
    }
  
    //! ------------------------------------------------------------------

  return (
    <div className={styles.mainDiv}>
      <div className={styles.toolbar}>
        <button onClick={handleMinMax}>
          {previewerDisplay ? <BsArrowBarRight className='text-2xl'/> : <BsArrowBarLeft className='text-2xl'/>}
        </button>
        <p className='text-xl'>Previewer</p>
      </div>
      <div className={styles.window}>
        <p dangerouslySetInnerHTML={{ __html: marked(innerText)}} className='text-slate-200'></p>
      </div>
    </div>
  );
}

export default Previewer;