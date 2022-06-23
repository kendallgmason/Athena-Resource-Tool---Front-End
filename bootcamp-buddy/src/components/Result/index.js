

export function Result({ result, index, handleClick, onRemove}) {
    console.log(result.id)
    return (
        <div >
            <div  data-testid="results-test" className="result">
                <div>
                    <h4>
                        <button onClick={() => {handleClick(index)}}><img src="star.svg" alt="A star" height="15px"/></button>
                        <a href={result.URL}>{result.title}</a>
                    </h4>
                    <h4>{result.type}</h4>
                    <h4>{result.topic}</h4>
                </div>
                <div id="paragraph">
                    <p>{result.description}</p>
                </div>
                <button type="button" className="delete-button" onClick={onRemove}>Delete</button>
            </div>
            
            <hr />
           
        </div>
    )
}