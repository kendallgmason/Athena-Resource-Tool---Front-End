import { Result } from "../Result";

export function ResultsList({ results }) {
    return (
        <div className="results">
            {results.map(result => Result({result}))};
        </div>
    );
}