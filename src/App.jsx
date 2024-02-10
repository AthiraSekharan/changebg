import { useState } from 'react'
import './App.css'

function App() {
  const [backgroundColor,setBackgroundColor] = useState('');

  const changeColour = (color) => {
    setBackgroundColor(color);
  };
  return (
    <>
    <div className='container w-75 '>
        <div style={{ width: '100%', height: '100vh',backgroundColor}} className='row d-flex justify-content-center align-items-center '>
  
    <div className='col-lg-9'>
              <h1 className='text-white'>BACKGROUND COLOUR CHANGE</h1>
      
    </div>
 
         <div className='w-25 mw d-flex justify-content-center align-items-center  p-3 rounded shadow flex-column text-light'>
            <button className='w-100 button btn1' style={{ marginRight: '10px',height:'60px' }} onClick={() => changeColour('red')}>RED</button><br />
            <button className=' w-100 button btn2' style={{ marginRight: '10px',height:'60px'  }} onClick={() => changeColour('blue')}>BLUE</button><br />
  
            <button className='w-100 button btn3' style={{ marginRight: '10px',height:'60px'  }} onClick={() => changeColour('green')}>GREEN</button><br />
  
            <button className='w-100 button btn4' style={{ marginRight: '10px',height:'60px'  }} onClick={() => changeColour('purple')}>PURPLE</button>
  
          </div>
        </div>
    </div>

    </>
  )
}

export default App
