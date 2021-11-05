import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <div className="App">
     <NavBar navToggle={navToggle} setNavToggle={setNavToggle}/>
    </div>
  );
}

export default App;
