import './App.css';
import { useState } from 'react';

import { Favourite } from '../Favourite';
import { ResultsList } from '../ResultsList';
import { Typedropdown } from './Typedropdown/index.js'
import { Search } from '../Search/index'
import { PostLink } from '../PostLink/index';
import { Dropdown } from '../Dropdown/index'
import { NavBar } from '../Navbar/index'


// This array will eventually be replaced by an array obtained by sending a query to the database
// We have used this here in the meantime as a placeholder for testing our components
const initialResources = [
  {
      URL: 'https://learngitbranching.js.org/',
      title: 'Learn Git Branching',
      type: 'Game/App',
      topic: 'Git',
      description: "LearnGitBranching is a git repository visualizer, sandbox, and a series of educational tutorials and challenges. Its primary purpose is to help developers understand git through the power of visualization (something that's absent when working on the command line). This is achieved through a game with different levels to get acquainted with the different git commands."
  },
  {
      URL: 'https://testing-library.com/docs/react-testing-library/cheatsheet/',
      title: 'A cheatsheet for the React Testing Library',
      type: 'Documentation',
      topic: 'React',
      description: "A short guide to all the exported functions in React Testing Library"
  },
  {
      URL: 'https://github.com/testing-library/jest-dom/blob/main/README.md',
      title: 'A list of custom jest matchers to test the state of the DOM',
      type: 'Documentation',
      topic: 'Jest',
      description: "The @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain."
  },
  {
      URL: 'https://linguinecode.com/post/react-usereducer-vs-usestate',
      title: 'React useReducer vs React useState: When to use one over the other?',
      type: 'Article',
      topic: 'React',
      description: "An article about what React.useReducer is used for, and when to use it instead ofReact.useState"
  }
];

function App() {
  // This state represents the full list of resources available - it is initially set to the placeholder array above
  const [resources, setResources] = useState(initialResources);
  // This state represents the text the user has typed into the search bar
  const [input, setInput] = useState("");
  // This state represents the current list of results on the page - it is initially set to the resources array above
  const [results, setResults] = useState(initialResources);
  // This state represents the current list of the user's favourites - it is initially a blank list
  const [favourites, setFavourites] = useState([]);

  // This function is used in the Search component
  // It updates the input state when the user types into the search bar
  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  // This function is used in the Search component
  // When the search button is clicked, it filters the resources array to match the user's input, and updates the results state
  // This updates the list of results on the page

  function handleClick() {
    const newResources = results.filter(resource => resource.title.toLowerCase().includes(input.toLowerCase()) || 
    resource.type.toLowerCase().includes(input.toLowerCase()))
    setResults(newResources);
    // Lastly, the function clears what the user has typed into the search box
    setInput("");
  }

  // This function is used in the ResultsList component
  // When the user clicks the star button next to a result, it adds the result to their favourites list 
  function addFavourite(index) {
    if(!favourites.includes(results[index])){
      const newFavourites = [...favourites, results[index]];
      setFavourites(newFavourites);
    } else {
      alert('Resource is already included in favourites.')
    }
  }

  // This function is used in the Favourites component
  // When the user clicks the star button next to a result, it removes the result from their favourites list 
  function deleteFavourite(index) {
    const newFavourites = [...favourites.slice(0, index), ...favourites.slice(index + 1)];
    setFavourites(newFavourites);
  }

  // This function is used in the PostLink component
  function addResource(resource) {
    const newResources = [...resources, resource];
    setResources(newResources);
    setResults(newResources);
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
        <Favourite favourites={favourites} handleClick={deleteFavourite}/>
      </div>

      <div className='middle-column'>
        <h1>Athena</h1>
        <div className="search">
          <Search handleChange={handleChange}
            handleClick={handleClick} input={input}/>
          <Dropdown handleChange={topicFilter} />
          <Typedropdown handleChange={typeFilter} />
        </div>
        <ResultsList results={results} handleClick={addFavourite} />
      </div>


      <div className='right-column'>
        <NavBar/>
        <PostLink handleClick={addResource} />
      </div>
    </div>
  );
}

export default App;