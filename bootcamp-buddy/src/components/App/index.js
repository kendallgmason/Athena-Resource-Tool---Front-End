import './App.css';
import { Search } from '../Search/index'
import { useState } from 'react';


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
    </div>
  );
}

export default App;
