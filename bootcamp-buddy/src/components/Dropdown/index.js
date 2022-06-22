export function Dropdown ({handleChange}) {
  return (
 
      <div className="dropdown">
          <label htmlFor="Categories"></label>
          <select onChange={handleChange} name="categories" id="Categories">
          <option className="dropdown-option" >Topic</option>
          <option className="dropdown-option" >React</option>
          <option className="dropdown-option" >Jest</option>
          <option className="dropdown-option" >Git</option>
          </select>

      </div>
  )
}