import { useState } from 'react';
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { setInnerHTML } from '../redux/actions';

function Editor() {

  const dispatch = useDispatch();

  const innerText = useSelector((state) => state.html);

  const handleTyping = (event) => {
    dispatch(setInnerHTML(event.target.value))
  }

  return (
    <div className="h-5/6 w-5/12 bg-teal-400">
      <div className="h-10 bg-teal-800 flex justify-between items-center px-4 font-semibold text-white">
        <p className='text-xl'>Editor</p>
        <button><BsArrowBarLeft className='text-2xl'/></button>
      </div>
      <div className='h-window w-full bg-slate-800'>
        <textarea cols="30" rows="10" value={innerText} onChange={handleTyping} className='w-full h-full bg-slate-800 text-slate-200 p-2'></textarea>
      </div>
    </div>
  );
}

export default Editor;