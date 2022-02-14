import React,{SyntheticEvent, useState} from 'react';

import './App.css';

function App() {
  const [color,setColor]= useState('red')
  const nextColor = color=== 'red'? 'blue':'red'
  const [disabled, setDisabled] = useState(false)
  const handleChange = (e:SyntheticEvent<HTMLInputElement>)=>
  {
    setDisabled(e.currentTarget.checked);
  }    
  return (
    <div >
     <button style={{backgroundColor:disabled?'gray':color}} onClick={()=>setColor(nextColor)} disabled={disabled}>Change to {nextColor}</button>
     <input type="checkbox" name="" id="disable-button-checkbox"  onChange={handleChange} defaultChecked={disabled} aria-checked={disabled}/>
     <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
