import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="app">
      <h1>tolkit</h1>

      <Router>
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/' exact element={< Home/>} />
            <Route path='/movie/:imdbID'  element={<MovieDetails />} />
            <Route element={<PageNotFound />}/>
          </Switch>
          </div>
          <Footer />
          </Router>
    </div>
  );
}

export default App;
