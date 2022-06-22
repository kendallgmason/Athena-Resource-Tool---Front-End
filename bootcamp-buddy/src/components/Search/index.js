
export function Search({handleClick, handleChange, input}) {

    
  return(
      <div className="search-box">
          <input 
          className="search-input"
          placeholder="What would you like to learn about?"
          type="text"
          onChange={handleChange}
          value={input}
          ></input>
          <button type="button" className="search-button" onClick={handleClick}>
              Search NOW!
          </button> 
      </div>
  ); 
}