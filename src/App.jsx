import {Editor, Previewer} from './components'

function App() {
  return (
    <div className='flex justify-evenly items-center h-screen w-screen bg-teal-200'>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;