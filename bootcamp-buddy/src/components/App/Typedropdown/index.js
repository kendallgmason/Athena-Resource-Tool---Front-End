export function Typedropdown ({handleChange}) {
    return (
        <div>
          <label htmlFor="Categories"> Type Of Type </label>
          <select onChange={handleChange} name="categories" id="another-categories">
          <option className="dropdown-option" ></option>
          <option className="dropdown-option" >Documentation</option>
          <option className="dropdown-option" >Article</option>
          <option className="dropdown-option" >Game/App</option>
          </select>
        </div>
   
    )
  }