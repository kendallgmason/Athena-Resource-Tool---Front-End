

export function Result({ result, index, handleClick, onRemove}) {
    
    return (
        <div key={result.id}>
            <div data-testid="results-test" className="result">
                <div>
                    <h4>
                        <button onClick={() => {handleClick(result.id)}}><img src="star.svg" alt="A star" height="15px"/></button>
                        <a href={result.url} target="_blank">{result.title}</a>
                    </h4>
                    <h4>{result.type}</h4>
                    <h4>{result.topic}</h4>
                </div>
                <div id="paragraph">
                    <p>{result.description}</p>
                </div>
                <button type="button" className="delete-button" onClick={()=>onRemove(result.id)}>Delete</button>
            </div>
            
            <hr />
           
        </div>
    )
}