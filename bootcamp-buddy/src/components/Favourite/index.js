export function Favourite({ favourite }) {
    return (
        <div className="favourite">
            <img src="star.svg" alt="A star"/>
            <a href={favourite.URL}>
                <h3>{favourite.title}</h3>
            </a>
        </div>
    );
}