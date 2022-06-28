// import "../App/App.css";
export function Favourite({ favourites, handleClick }) {
    return (
        <div className="favourites-content">
            <h2>My Favourites</h2>
            <ul>
                {favourites.map(favourite => 
                    (<li Style={"list-style: none"} className="favourite" key={favourite.id}>
                        <button onClick={() => {handleClick(favourite.id)}}>
                            <img src="star.svg" alt="A star" height="15px"/>
                        </button>
                        <a href={favourite.url} target="_blank">
                            <h3>{favourite.title}</h3>
                        </a>
                    </li>)
                )}
            </ul>
        </div>
    );
}