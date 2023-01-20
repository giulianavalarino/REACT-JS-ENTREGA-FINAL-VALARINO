import React, {useState} from 'react';
import './App.css';
import Button from './components/button/button';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import { ItemList } from './components/itemList/itemList';
import { Router } from './Router/router';
import { Home } from './pages';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const onHandlerCart = () => {
    setOpen(!isOpen);
  }
  return(
    <div className='container'>
      <Sidebar onClose={onHandlerCart} isOpen={isOpen}>
        <Link to='/Cart'>Go to cart</Link>
      </Sidebar>
      <Navbar numbersOfItems={0} onHandlerCart={onHandlerCart}/>
      <Router/>
    </div>
  )

}

export default App;
