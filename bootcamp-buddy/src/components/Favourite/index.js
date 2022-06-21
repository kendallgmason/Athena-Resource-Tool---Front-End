import "../App/App.css";
export function Favourite({ favourites }) {
    return (
        <div className="favourites-content">
            <ul>
                {favourites.map(favourite => 
                    (<li Style={"list-style: none"}>
                        <div className="favourite">
                            <img src="star.svg" alt="A star"/>
                            <a href={favourite.URL}>
                                <h3>{favourite.title}</h3>
                            </a>
                        </div>
                    </li>)
                )}
            </ul>
        <button id="save-button" type="button">Save</button>
        </div>
    );
}