import React,{SyntheticEvent, useState} from 'react';

import './App.css';

export function replaceCamelWithSpaces(colorName:string){
  return colorName.replace(/\B([A-Z])\B/g,' $1')
}

function App() {

  const [color,setColor]= useState('MediumVioletRed')
  const nextColor = color=== 'MediumVioletRed'? 'MidnightBlue':'MediumVioletRed'
  const textColor = replaceCamelWithSpaces(nextColor)
  const [disabled, setDisabled] = useState(false)
  const handleChange = (e:SyntheticEvent<HTMLInputElement>)=>
  {
    setDisabled(e.currentTarget.checked);
  }    
  return (
    <div >
     <button style={{backgroundColor:disabled?'gray':color}} onClick={()=>setColor(nextColor)} disabled={disabled}>Change to {textColor}</button>
     <input type="checkbox" name="" id="disable-button-checkbox"  onChange={handleChange} defaultChecked={disabled} aria-checked={disabled}/>
     <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
