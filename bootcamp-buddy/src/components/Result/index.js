export function Result({ result }) {
    return (
            <div>
                <div className="result">
                    <div>
                        <h3>
                            {result.title}
                        </h3>
                        <h3>{result.type}</h3>
                        <h3>{result.topic}</h3>
                    </div>
                    <p>{result.description}</p>
                </div>
                <hr />
            </div>
    )
}