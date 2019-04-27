import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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

  const footer = {
    right: 0,
    bottom: 0,
    left: 0,
    padding: '1rem',
    backgroundColor: 'lightgray',
    textAlign: 'center'
  }

  const back = {
    height: '2000px',
    backgroundColor: 'lightgray'
  }

  return (
    <div style = {back}>
      <div style={main}>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/menu' component={Menu} />
        </Switch>
        <div style={footer}>
          <Footer/>
        </div>
      </div>
    </div>

  );
}

export default App;
