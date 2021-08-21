import React from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Nav from './components/Nav/Nav';
import {useSelector} from 'react-redux'
import Home from './pages/Home/Home';
import values from './constants/values'
import './App.css';

function App() {
  
  const skills = useSelector((state) => state.skills);
console.log('STATE', skills)
  return (
    <div className="App">
     
        <Nav />
<Home />        
      
    </div>
  );
}

export default App;
