import './App.css';
import { useState, useEffect } from 'react';
import { Dropdown } from '../Dropdown';
import { Favourites } from '../Favourites';
import { NavBar } from '../Navbar';
import { PostLink } from '../PostLink';
import { ResultsList } from '../ResultsList';
import { Search } from '../Search';
import { Typedropdown } from '../Typedropdown';

function App() {
  const [resources, setResources] = useState([]); // resources = all of the resources
  const [results, setResults] = useState([]); // results = the resources currently on display (i.e. the filtered list of resources)
  const [input, setInput] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [isError,setIsError] = useState(false); 
  
  const fetchDataFromDB = async () => {
    setIsError(false);
    try {
      const data = await fetch('/resources');
      const json = await data.json();
      setResources(json.payload);
      setResults(json.payload);
      const favouritesArray = [];
      for (let i = 0; i < json.payload.length; i++) {
        if (json.payload[i].isfavourite === 'true') {
          favouritesArray.push(json.payload[i])
        }
      }
      setFavourites(favouritesArray)
    } catch(error) {
      setIsError(true)
    } 
  }

  useEffect(() => {
    fetchDataFromDB();
  }, [])

  function setInputToUsersSearchTerm(e) {
    setInput(e.target.value);
  }

  function searchByTitle() {
    if (input === "") {
      setResults(resources);
      return;
    }
    const newResults = results.filter(result => result.title.toLowerCase().includes(input.toLowerCase()))
    setResults(newResults);
    setInput("");
  }

  async function addFavourite(idOfNewFavourite) {
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === idOfNewFavourite) {
        if (resources[i].isfavourite === 'true') {
          alert('Resource is already included in favourites.')
          return;
        } else { 
          resources[i].isfavourite = 'true';
        }
      }
    }

    let newFavourite;
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === idOfNewFavourite) {
        newFavourite = resources[i];
      }
    }
    
    setFavourites([...favourites, newFavourite])

    await fetch(`/resources/${idOfNewFavourite}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...newFavourite, isFavourite: "true"})
    })
  }

  async function deleteFavourite(idOfFavouriteToRemove) {
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === idOfFavouriteToRemove) {
        resources[i].isfavourite = 'false';
      }
    }
  
    let favouriteToRemove;
    let newFavourites;
    for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].id === idOfFavouriteToRemove) {
        favouriteToRemove = favourites[i];
        newFavourites = [...favourites.slice(0, i), ...favourites.slice(i + 1)];
      }
    }
    
    setFavourites(newFavourites)

    await fetch(`/resources/${idOfFavouriteToRemove}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...favouriteToRemove, isFavourite: "false"})
    })
  }

  async function addResourceToDB(newResource) {
    for (const key in newResource) {
      if (newResource[key] === '') {
        alert(`${key} cannot be null!`)
        return;
      }
    }

    await fetch('/resources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newResource)
    })

    fetchDataFromDB();
    alert('New resource added!')
  }

  function filterByTopic(e) {
    const topicToFilterBy = e.target.value;
    if (topicToFilterBy === 'All') {
      const newResults = resources;
      setResults(newResults);
    } else {
      const newResults = resources.filter(resource => resource.topic.toLowerCase().includes(topicToFilterBy.toLowerCase()))
      console.log(newResults);
      setResults(newResults);
    }
  }
  function filterByType(e) {
    const typeToFilterBy = e.target.value;
    if (typeToFilterBy === 'All') {
      const newResults = resources;
      setResults(newResults);
    } else {
      const newResults = resources.filter(resource => resource.type.toLowerCase().includes(typeToFilterBy.toLowerCase()))
      setResults(newResults);
    }
  }

  function deleteResult(idOfResultToDelete){
    if (window.confirm('Are you sure you want to delete ?')) {
      const newResult = results.filter(result => result.id !== idOfResultToDelete)
      setResults(newResult);
    //Call async function to delete from db
    deleteItem(idOfResultToDelete);
    }
  }
  async function deleteItem(idOfResultToDelete){
     await fetch(`/resources/${idOfResultToDelete}`, {method: 'DELETE'});
     fetchDataFromDB();
  }

  return (
    <div className="App">
     
      <div className='left-column'>
        <img src='logo.svg' alt='img' className="logo" />
        <Favourites favourites={favourites} handleClick={deleteFavourite}/>
      </div>

      <div className='middle-column'>
        <h1>Athena</h1>
        <div className="search" >
          <Search handleChange={setInputToUsersSearchTerm} handleClick={searchByTitle} input={input} />
          <Dropdown handleChange={filterByTopic} />
          <Typedropdown handleChange={filterByType} />
        </div>
        <ResultsList results={results} handleClick={addFavourite} onRemove={deleteResult}/>
        {isError && <div style={{fontWeight:600, fontSize:'30px'}}>Something went wrong ...</div>}
      </div>

      <div className='right-column'>
        <NavBar />
        <PostLink handleClick={addResourceToDB} />
      </div>

    </div>
  );
}

export default App;