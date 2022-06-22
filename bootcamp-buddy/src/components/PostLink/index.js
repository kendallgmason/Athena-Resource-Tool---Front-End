import { useState } from 'react';
import { Typedropdown } from '../App/Typedropdown/index.js';
import { Dropdown } from '../Dropdown/index.js';

export function PostLink({ handleClick , onSelect}){

  const[resource, setResource] = useState({
    topic: onSelect,
    type:"",
    URL: "",
    title: "",
    description: ""
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setResource({
      ...resource,
      [name]: value
    })
    console.log(resource)
  }
 //----------- 
// const [val,setVal]= useState()
// function handlechanging(e){
//   setVal(e.target.value)
//   console.log(setVal)
// }
//-----------
  return(
    <div className="post-link-content">
      <h2>Put your new links here</h2>
      <div className="fields">
      <div className="wrapper-item1">
        <Dropdown name="topic" value={resource.topic} onChange={handleInputChange}></Dropdown>
        </div>
        <div className="wrapper-item1">
        <Typedropdown name="type" value={resource.type} onChange={handleInputChange}></Typedropdown>
        </div>
        <div className="wrapper-item1">
          <input type="text" name="URL" value={resource.URL} placeholder='URL' onChange={handleInputChange}/>
        </div>
        <div className="wrapper-item2">
          <input type="text" name="title" value={resource.title} placeholder='Title' onChange={handleInputChange}/>
        </div>
        <div className="wrapper-item3">
          <input type="text" name="description" value={resource.description} placeholder='Description' onChange={handleInputChange}/>
        </div>
      </div>
      <button type="submit" onClick={() => {handleClick(resource)}}>Submit</button>
    </div>
  )
};