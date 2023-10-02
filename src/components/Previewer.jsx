import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'

function Previewer() {
  return (
    <div className="h-5/6 w-5/12 bg-teal-400">
      <div className="h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-white">
        <button><BsArrowBarRight className='text-2xl'/></button>
        <p className='text-xl'>Previewer</p>
      </div>
      <div className='h-window w-full bg-slate-800'>

      </div>
    </div>
  );
}

export default Previewer;