import React, { useState } from 'react';
import './App.css';

import Spinner from './Spinner/Spinner'
import useSpinner from './Spinner/UseSpinner'


const App = () => {
  const [overlay, setOverlay] = useState(false)
  const [spinner, showSpinner, hideSpinner] = useSpinner(overlay) 
  const fakeFetch = () => {
    showSpinner()
    setTimeout( () => hideSpinner(), 3000)
  }
  return (
    <div className="App">
      <div className="Input-group">
        <label htmlFor="overlay">Overlay</label>
        <input 
          type="checkbox"
          name="overlay"
          value={overlay}
          onChange={e => setOverlay(e.target.checked)}
         />
      </div>
      <button onClick={fakeFetch}>Fetch</button>
      {spinner}
    </div>
  )
}

export default App;

