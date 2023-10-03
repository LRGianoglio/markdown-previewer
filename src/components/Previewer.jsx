import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { maximizePreviewer, minimizePreviewer } from '../redux/actions';

function Previewer() {

  const dispatch = useDispatch();

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
    "h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-white" :
    "h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-red-300"

  return (
    <div className="h-5/6 w-5/12 bg-teal-400">
      <div className={estilo}>
        <button onClick={handleMinMax}>
          {previewerDisplay ? <BsArrowBarRight className='text-2xl'/> : <BsArrowBarLeft className='text-2xl'/>}
        </button>
        <p className='text-xl'>Previewer</p>
      </div>
      <div className='h-window w-full bg-slate-800 p-2'>
        <p dangerouslySetInnerHTML={{ __html: innerText}} className='text-slate-200'></p>
      </div>
    </div>
  );
}

export default Previewer;