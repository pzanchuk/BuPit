import React from "react";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import { Switch, Route } from 'react-router-dom';


function App(){
  const main = {
      width: '1220px',
      marginTop: 0,
      margin: 'auto'
  }

  return (
    <div>
      <div style={main}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/menu' component={Menu} />
        </Switch>
      </div>
    </div>

  );
}

export default App;
