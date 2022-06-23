import "../App/App.css";
export function Favourite({ favourites, handleClick }) {
    return (
        <div className="favourites-content">
            <h2>My Favourites</h2>
            <ul>
                {favourites.map((favourite, index) => 
                    (<li Style={"list-style: none"} className="favourite" >
                        <button data-testid="favourites-button" onClick={() => {handleClick(index)}}>
                            <img src="star.svg" alt="A star" height="15px"/>
                        </button>
                        <a href={favourite.URL}>
                            <h3>{favourite.title}</h3>
                        </a>
                    </li>)
                )}
            </ul>
            <button id="save-button" type="button">Save</button>
        </div>
    );
}