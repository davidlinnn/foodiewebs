import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import History from './components/pages/History';
import AboutUs from './components/pages/AboutUs';
import Content from './components/pages/Content';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/history' component={History} />
          <Route path='/About-Us' component={AboutUs} />
          <Route path='/Content' component={Content} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
