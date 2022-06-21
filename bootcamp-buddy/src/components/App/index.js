import './App.css';
import { Favourite } from '../Favourite';

function App() {
  return (
    <div className="App">
    Hello 
      <Favourite favourite={{title: 'Learn git', URL: "https://learngitbranching.js.org/"}} />
    </div>
  );
}

export default App;
