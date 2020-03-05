import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
import Pokelist from './pages/pokelist';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/List" component={Pokelist} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
