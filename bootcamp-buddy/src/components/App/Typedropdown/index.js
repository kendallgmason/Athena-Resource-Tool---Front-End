export function Typedropdown ({handleChange}) {
    return (
        <div className="typeDropdown">
          <label htmlFor="Categories"> </label>
          <select onChange={handleChange} name="categories" id="another-categories">
            <option className="dropdown-option" >All</option>
            <option className="dropdown-option" >Documentation</option>
            <option className="dropdown-option" >Article</option>
            <option className="dropdown-option" >Game/App</option>
          </select>
        </div>
    )
  }