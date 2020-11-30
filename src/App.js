import React from 'react';
import './index';
import './App.css';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';

import SlotM from './SlotM'
import { Route, Switch } from 'react-router-dom';
import Search from './Search';

function App() {

  const Name=()=>{
    return <h1>This isfrom Contact Name</h1>;
  }

  return (
    <>
      {/* <h1 className='heading'>Welcome to the <span style={{ fontWeight: 'bold' }}>Slot Machine Game</span></h1>
      <div className='container'>
        <SlotM x={'😄'} y={'😄'} z={'😄'}/>
        <SlotM x={'😄'} y={'😄'} z={'😄'}/>
        <SlotM x={'😄'} y={'🍎'} z={'😄'}/>
        <SlotM x={'🍌'} y={'😄'} z={'😄'}/>
      </div> */}
      <Menu></Menu>
      <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route path="/contact/name" component={Name}/>
      <Route path="/search" component={Search}/>
      <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
