import './App.css';
import { Search } from '../Search/index'
import { useState } from 'react';
import {Dropdown} from '../Dropdown/index'


function App() {
  const [input, setInput] = useState("");
  const [click, setClicked] = useState(false);

  function handleChange(e) {
    setInput(e);
    console.log(input);
  }

  function handleClick() {
    setClicked(click);
    console.log(click);
  }

  return (
    <div className="App">
    <Search handleChange={(e) => {
      handleChange(e.target.value);

    }}
    handleClick={handleClick} />
   <Dropdown handleChange={handleChange} options= {"Potato"}/>
    </div>
  );
}

export default App;
