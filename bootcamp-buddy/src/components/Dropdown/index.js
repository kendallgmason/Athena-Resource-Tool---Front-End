import { useState } from "react";
export function Dropdown ({handleChange}) {

  const[value,setValue] = useState('');

  function handleSelect(e){
    setValue(e.target.value);
    console.log(value)
  }
  return (
 
      <div>
          <label htmlFor="Categories"> Type Of Topic </label>
          <select onChange={handleChange} onSelect={handleSelect} name="categories" id="Categories">
          <option className="dropdown-option" ></option>
          <option className="dropdown-option" >React</option>
          <option className="dropdown-option" >Jest</option>
          <option className="dropdown-option" >Git</option>
          </select>

      </div>
  )
}