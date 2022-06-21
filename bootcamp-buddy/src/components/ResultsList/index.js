import { Result } from "../Result";

export function ResultsList({ results, addFavourite }) {
    return (
        <div className="results">
            {results.map((result, index) => Result({result, index, addFavourite}))}
        </div>
    );
}