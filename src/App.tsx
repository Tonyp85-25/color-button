import React,{SyntheticEvent, useState} from 'react';

import './App.css';

function App() {
  const [color,setColor]= useState('red')
  const nextColor = color=== 'red'? 'blue':'red'
  const [disabled, setDisabled] = useState(false)
  return (
    <div >
     <button style={{backgroundColor:color}} onClick={()=>setColor(nextColor)} disabled={disabled}>Change to {nextColor}</button>
     <input type="checkbox" name="" id="disable-button-checkbox"  onChange={(e:SyntheticEvent<HTMLInputElement>)=>setDisabled(e.currentTarget.checked)} defaultChecked={disabled} aria-checked={disabled}/>
     <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
