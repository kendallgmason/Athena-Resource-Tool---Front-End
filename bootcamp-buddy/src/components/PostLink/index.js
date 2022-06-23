import { useState } from 'react';
import { Typedropdown } from '../App/Typedropdown/index.js';
import { Dropdown } from '../Dropdown/index.js';

export function PostLink({ handleClick }){

  const[resource, setResource] = useState({
    topic: "",
    type:"",
    url: "",
    title: "",
    description: ""
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setResource({
      ...resource,
      [name]: value
    })
  }

  function handleTopicChange(e) {
    const value = e.target.value;
    setResource({
      ...resource,
      topic: value
    })
  }

  function handleTypeChange(e) {
    const value = e.target.value;
    setResource({
      ...resource,
      type: value
    })
  }

  return(
    <div className="post-link-content" data-testid="object">
      <h2>Add Helpful Links</h2>
      <div className="fields">
        <div className="wrapper-itemDropdown">
          <Dropdown handleChange={handleTopicChange}></Dropdown>
        </div>
        <div className="wrapper-itemDropdown">
          <Typedropdown handleChange={handleTypeChange}></Typedropdown>
        </div>
        <div className="wrapper-item1">
          <input type="text" name="url" value={resource.url} placeholder='url' onChange={handleInputChange}/>
        </div>
        <div className="wrapper-item2">
          <input type="text" name="title" value={resource.title} placeholder='Title' onChange={handleInputChange}/>
        </div>
        <div className="wrapper-item3">
          <input type="text" name="description" value={resource.description} placeholder='Description' onChange={handleInputChange}/>
        </div>
      </div>
      <button className="submit-button" type="submit" onClick={() => {handleClick(resource)}}>Submit</button>
    </div>
  )
};