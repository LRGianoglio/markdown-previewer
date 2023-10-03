import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { maximizeEditor, minimizeEditor, setInnerHTML } from '../redux/actions';

function Editor() {

  const dispatch = useDispatch();

  const innerText = useSelector((state) => state.html);
  const editorDisplay = useSelector((state) => state.editorDisplay);
  const previewerDisplay = useSelector((state) => state.previewerDisplay);

  const handleTyping = (event) => {
    dispatch(setInnerHTML(event.target.value))
  }

  const handleMinMax = () => {
    editorDisplay ?
      dispatch(minimizeEditor()) :
      dispatch(maximizeEditor())
  }

  const estilo = 
    editorDisplay ?
    "h-10 bg-teal-900 flex border-b-2 border-teal-500 justify-between items-center px-4 font-semibold text-teal-500" :
    "h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-red-300"

  return (
    <div className="h-5/6 w-5/12 border-teal-500 border-2 shadow-2xl">
      <div className={estilo}>
        <p className='text-xl'>Editor</p>
        <button onClick={handleMinMax}>
          {editorDisplay ? <BsArrowBarLeft className='text-2xl'/> : <BsArrowBarRight className='text-2xl'/>}
        </button>
      </div>
      <div className='h-window w-full bg-slate-800'>
        <textarea cols="30" rows="10" value={innerText} onChange={handleTyping} className='w-full h-full bg-slate-800 text-slate-200 p-4'></textarea>
      </div>
    </div>
  );
}

export default Editor;