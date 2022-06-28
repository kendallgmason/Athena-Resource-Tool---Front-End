export function Search({handleClick, handleChange, input}) {
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleClick();
        }
    }
    
    return(
        <div className="search-box" data-testid="search-test">
            <input 
            className="search-input"
            placeholder="What would you like to learn about?"
            type="text"
            onChange={handleChange}
            value={input}
            onKeyPress={handleKeyPress}
            ></input>
            <button type="button" className="search-button" onClick={handleClick}>
                Search
            </button> 
        </div>
    ); 
}