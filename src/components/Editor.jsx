import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'

function Editor() {
  return (
    <div className="h-5/6 w-5/12 bg-teal-400">
      <div className="h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-white">
        <p className='text-xl'>Editor</p>
        <button><BsArrowBarLeft className='text-2xl'/></button>
      </div>
      <div className='h-window w-full bg-slate-800'>

      </div>
    </div>
  );
}

export default Editor;