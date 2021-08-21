import React from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home/Home';
import values from './constants/values';
import './App.css';

function App() {
  const skills = useSelector((state) => state.skills);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dropdown">
            <Dropdown values={values} title="skills" selectedValues={skills} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
