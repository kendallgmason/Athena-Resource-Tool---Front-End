import { useState } from 'react';

export function PostLink({ handleClick }){
  const[resource, setResource] = useState({
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
  }

  return(
    <div className="post-link-content">
      <h2>Put your new links here</h2>
      <div className="fields">
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
      <button className="submit-button" type="submit" onClick={() => {handleClick(resource)}}>Submit</button>
    </div>
  )
};