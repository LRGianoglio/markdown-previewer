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

  const estilo = 
    previewerDisplay ?
    "h-10 bg-teal-900 flex border-b-2 border-teal-500 justify-between items-center px-4 font-semibold text-teal-500" :
    "h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-red-300"

  return (
    <div className="h-5/6 w-5/12 border-teal-500 border-2 shadow-2xl">
      <div className={estilo}>
        <button onClick={handleMinMax}>
          {previewerDisplay ? <BsArrowBarRight className='text-2xl'/> : <BsArrowBarLeft className='text-2xl'/>}
        </button>
        <p className='text-xl'>Previewer</p>
      </div>
      <div className='h-window w-full bg-slate-800 p-4 overflow-y-scroll'>
        <p dangerouslySetInnerHTML={{ __html: marked(innerText)}} className='text-slate-200'></p>
      </div>
    </div>
  );
}

export default Previewer;