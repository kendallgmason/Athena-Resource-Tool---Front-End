export function Search({handleClick, handleChange}) {
  return(
      <div className="search-box">
          <input 
          className="search-input"
          placeholder="What would you like to learn about?"
          type="text"
          onChange={handleChange}
          ></input>
          <button type="button" className="search-button" onClick={handleClick}>
              Search NOW!
          </button> 
      </div>
  ); 
}