import { useState } from 'react';
import './App.css';
import Dropdown from "./Dropdown"
import Dropdown2 from './Dropdown2';

function App() {

  const [selected, setSelected] = useState("")

  return (
    <div>
      <h3 className='drop-heading'>Should you use a dropdown ?</h3>
      {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
      <Dropdown2 />
    </div>
  );
}

export default App;
