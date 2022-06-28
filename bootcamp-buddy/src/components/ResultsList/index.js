import { Result } from "../Result";

export function ResultsList({ results, handleClick ,onRemove}) {
    return (
        <div className="results" >
            {results.map((result, index) => Result({result, index, handleClick, onRemove}))}
            <div className="end">
                <h4>End of results</h4>
            </div>
        </div>
    );
}