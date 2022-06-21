import './App.css';

import { Favourite } from '../Favourite';
import { ResultsList } from '../ResultsList';
import { Search } from '../Search/index'
import { useState } from 'react';

import PostLink from '../PostLink/index';

import {Dropdown} from '../Dropdown/index'
import {NavBar} from '../Navbar/index'


const resources = [
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
  const [input, setInput] = useState("");
  const [click, setClicked] = useState(false);

  function handleChange(e) {
    setInput(e);
    console.log(input);
  }

  function handleClick() {
    setClicked(click);
    console.log(click);
  }

  return (
    <div className="App">

    <div className='left-column'>
      <div className='logo'>
        <img src='' alt='img'></img>
      </div>
      <h2>My Favourites</h2>
    <Favourite favourite={{title: 'Learn git', URL: "https://learngitbranching.js.org/"}} />
    </div>

    <div className='middle-column'>
    <Search handleChange={(e) => {
      handleChange(e.target.value);
      }}
      handleClick={handleClick}>
    </Search>
    <Dropdown handleChange={handleChange} options= {"Potatoes"}/>
    <ResultsList results={resources} />
    </div>

    <div className='right-column'>
    <NavBar/>
    <PostLink></PostLink>
    </div>

    </div>
  );
}

export default App;
