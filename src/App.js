import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './components/InputNumber';


function App() {
  const [value, setValue] = useState(0);

  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          受控组件：<InputNumber value={value} onChange={e => {
            //  console.log(e)
            setValue(Number(e.target.value))
          }}></InputNumber>
        </div>
        <div>
          非受控组件: <InputNumber defaultValue={value} onChange={e => { }}></InputNumber>
        </div>

      </header>
    </div>
  );
}

export default App;
