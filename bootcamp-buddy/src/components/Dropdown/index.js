export function Dropdown ({handleChange}) {
  return (
      <div>
          <label htmlFor="Categories"> Type Of Article </label>
          <select onChange={handleChange} name="categories" id="Categories">
          <option className="dropdown-option" ></option>
          <option className="dropdown-option" >Github</option>
          <option className="dropdown-option" >JS</option>
          <option className="dropdown-option" >React</option>
          </select>

      </div>
  )
}