export function Dropdown ({handleChange}) {
  return (
 
      <div>
          <label htmlFor="Categories"> Type Of Topic </label>
          <select onChange={handleChange} name="categories" id="Categories">
          <option className="dropdown-option" ></option>
          <option className="dropdown-option" >React</option>
          <option className="dropdown-option" >jest</option>
          <option className="dropdown-option" >git</option>
          </select>

      </div>
  )
}