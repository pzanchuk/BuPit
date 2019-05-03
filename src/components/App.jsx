import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import NewBeerForm from './NewBeerForm';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
    console.log(this.state);
  }

  render(){
    return (
      <div className="main">
        <style jsx>{`
          .main{
            width: 1220px;
            margin-top: 0;
            margin: auto;
          }

          .back{
            height: 2000px;
            background-color: lightgray;
          }
        `}</style>

        <div className="back">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='newbeer' component={NewBeerForm} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/menu' render={()=><Menu beerList={this.state.masterBeerList} />} />
            <Route path='/newbeer' render={()=><NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          </Switch>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;