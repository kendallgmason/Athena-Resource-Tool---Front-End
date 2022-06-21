export function Result({ result, index, handleClick }) {
    return (
        <div>
            <div className="result">
                <div>
                    <h4>
                        <button onClick={() => {handleClick(index)}}><img src="star.svg" alt="A star" height="15px"/></button>
                        <a href={result.URL}>{result.title}</a>
                    </h4>
                    <h4>{result.type}</h4>
                    <h4>{result.topic}</h4>
                </div>
                <p>{result.description}</p>
            </div>
            <hr />
        </div>
    )
}