import React from 'react'
import './App.css'
import {BrowserRouter , Router ,Route} from 'react-router-dom'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
const App = () => {
  return (
   <div>
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg' >
         <div className='fixed bottom-4 right-4' style={{zIndex:'1000'}}>
           <TooltipComponent content='Settings' position='Top'>
             <button type='button' className='text-3xl p-3 
             hover:drop-shadow-xl hover:bg-light-gray text-white'
             style={{background:'blue',borderRadius:'50%' }}>
              <FiSettings />
             </button>
           </TooltipComponent>
         </div>
      </div>
    </BrowserRouter>
   </div>
  )
}

export default App