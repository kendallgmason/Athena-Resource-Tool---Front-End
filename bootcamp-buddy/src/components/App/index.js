import './App.css';
import { useState, useEffect } from 'react';
import { Favourite } from '../Favourite';
import { ResultsList } from '../ResultsList';
import { Typedropdown } from './Typedropdown/index.js'
import { Search } from '../Search/index'
import { PostLink } from '../PostLink/index';
import { Dropdown } from '../Dropdown/index'
import { NavBar } from '../Navbar/index'


// This array will eventually be replaced by an array obtained by sending a query to the database
// We have used this here in the meantime as a placeholder for testing our components
// const initialResources = [
//   {
//       URL: 'https://learngitbranching.js.org/',
//       title: 'Learn Git Branching',
//       type: 'Game/App',
//       topic: 'Git',
//       description: "LearnGitBranching is a git repository visualizer, sandbox, and a series of educational tutorials and challenges. Its primary purpose is to help developers understand git through the power of visualization (something that's absent when working on the command line). This is achieved through a game with different levels to get acquainted with the different git commands."
//   },
//   {
//       URL: 'https://testing-library.com/docs/react-testing-library/cheatsheet/',
//       title: 'A cheatsheet for the React Testing Library',
//       type: 'Documentation',
//       topic: 'React',
//       description: "A short guide to all the exported functions in React Testing Library"
//   },
//   {
//       URL: 'https://github.com/testing-library/jest-dom/blob/main/README.md',
//       title: 'A list of custom jest matchers to test the state of the DOM',
//       type: 'Documentation',
//       topic: 'Jest',
//       description: "The @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain."
//   },
//   {
//       URL: 'https://linguinecode.com/post/react-usereducer-vs-usestate',
//       title: 'React useReducer vs React useState: When to use one over the other?',
//       type: 'Article',
//       topic: 'React',
//       description: "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
//   }
// ];



function App() {

  // This state represents the full list of resources available - it is initially set to the placeholder array above
  const [resources, setResources] = useState([]);
  // This state represents the text the user has typed into the search bar
  const [input, setInput] = useState("");
  // This state represents the current list of results on the page - it is initially set to the resources array above
  const [results, setResults] = useState([]);
  // This state represents the current list of the user's favourites - it is initially a blank list
  const [favourites, setFavourites] = useState([]);
  //this state for handling errors
  const [isError,setIsErros] = useState(false); 
  // useEffect(() => {
  //   // declare the async data fetching function
  //   const fetchData = async () => {
  //     // get the data from the api
  //     const data = await fetch('http://localhost:3001');
  //     console.log(data);
  //     // convert data to json
  //     const json = await data.json();
  //     console.log(json);
  //     return json;
  //   }
  //   fetchData();
  // },[]);
  
  const fetchData = async () => {
    setIsErros(false)
    try{
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

    }catch(error){
      setIsErros(true)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // This function is used in the Search component
  // It updates the input state when the user types into the search bar
  function handleChange(e) {
    setInput(e.target.value);
  }

  // This function is used in the Search component
  // When the search button is clicked, it filters the resources array to match the user's input, and updates the results state
  // This updates the list of results on the page

  function handleClick() {
    if (input === "") {
      setResults(resources);
      return;
    }
    const newResources = results.filter(resource => resource.title.toLowerCase().includes(input.toLowerCase()))
    setResults(newResources);
    // Lastly, the function clears what the user has typed into the search box
    setInput("");
  }

  // This function is used in the ResultsList component
  // When the user clicks the star button next to a result, it adds the result to their favourites list 
  function addFavourite(id) {
    for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].id === id) {
        alert('Resource is already included in favourites.')
        return;
      }
    }
    let newFavourite;
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === id) {
        newFavourite = resources[i];
      }
    }
    const newFavourites = [...favourites, newFavourite];
    setFavourites(newFavourites);
  }

  async function addFavouriteToDB(id) {
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === id) {
        if (resources[i].isfavourite === 'true') {
          alert('Resource is already included in favourites.')
          return;
        }
      }
    }
    let newFavourite;
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === id) {
        newFavourite = resources[i];
      }
    }
    const response = await fetch(`/resources/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...newFavourite, isFavourite: "true"})
    })
    // Sending a fresh GET request to the database for the resources table, and displaying it on the page
    fetchData();
  }

  // This function is used in the Favourites component
  // When the user clicks the star button next to a result, it removes the result from their favourites list 
  function deleteFavourite(index) {
    const newFavourites = [...favourites.slice(0, index), ...favourites.slice(index + 1)];
    setFavourites(newFavourites);
  }

  async function deleteFavouriteFromDB(id) {
    let newFavourite;
    for (let i = 0; i < resources.length; i++) {
      if (resources[i].id === id) {
        newFavourite = resources[i];
      }
    }
    const response = await fetch(`/resources/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...newFavourite, isFavourite: "false"})
    })
    // Sending a fresh GET request to the database for the resources table, and displaying it on the page
    fetchData();
  }

  // This has been replaced by the addResourceToDB function below
  function addResource(resource) {
    const newResources = [...resources, resource];
    setResources(newResources);
    setResults(newResources);
  }

  //This function is used to delete a result from the ResultList 
  function handleDelete(id){
    console.log(results)
    const newResult = results.filter(result=> result.id !== id)
    setResults(newResult);
    console.log(newResult)
    
  }
  
  // This function is used in the PostLink component
  // When the user clicks 'Submit', it sends a POST request to the API to add the new resource to the table
  // Lastly the function runs the fetchData function
 
  async function addResourceToDB(resource) {
    for (const key in resource) {
      if (resource[key] === '') {
        alert(`${key} cannot be null!`)
        return;
      }
    }
    const response = await fetch('/resources', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resource)
    })
    console.log(JSON.stringify(resource));
    // Sending a fresh GET request to the database for the resources table, and displaying it on the page
    fetchData();
    alert('New resource added!')
  }

  // These functions are used in the Dropdown components
  // When a topic/type is selected, it filters the results accordingly, and updates the results state
  // This updates the list of results on the page
  function topicFilter(e) {
    if (e.target.value === 'All') {
      const newResults = resources;
      setResults(newResults);
    } else {
      const newResults = resources.filter(resource => resource.topic.toLowerCase().includes(e.target.value.toLowerCase()))
      console.log(newResults);
      setResults(newResults);
    }
  }
  function typeFilter(e) {
    if (e.target.value === 'All') {
      const newResults = resources;
      setResults(newResults);
    } else {
      const newResults = resources.filter(resource => resource.type.toLowerCase().includes(e.target.value.toLowerCase()))
      setResults(newResults);
    }
  }

  return (
    <div className="App">
     
      <div className='left-column'>
        <img src='logo.svg' alt='img' className="logo" />
        <Favourite favourites={favourites} handleClick={deleteFavouriteFromDB}/>
      </div>

      <div className='middle-column'>
        <h1>Athena</h1>
        <div className="search" >
          <Search handleChange={handleChange}
            handleClick={handleClick} input={input}/>
          <Dropdown handleChange={topicFilter} />
          <Typedropdown handleChange={typeFilter} />
        </div>

      
        <ResultsList results={results} handleClick={addFavourite}  onRemove={handleDelete}/>
        {isError && <div style={{fontWeight:600, fontSize:'30px'}}>Something went wrong ...</div>}

        <ResultsList results={results} handleClick={addFavouriteToDB} />

      </div>


      <div className='right-column'>
        <NavBar/>
        <PostLink handleClick={addResourceToDB} />
      </div>
    </div>
  );
}

export default App;