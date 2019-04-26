import React from "react";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import { Switch, Route } from 'react-router-dom';





function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
