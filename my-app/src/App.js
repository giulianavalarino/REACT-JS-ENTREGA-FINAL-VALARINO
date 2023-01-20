import React, {useState} from 'react';
import './App.css';
import Button from './components/button/button';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/navbar/navbar';
import { ItemList } from './components/itemList/itemList';
import { Router } from './Router/router';

function App() {
  const [isOpen, setOpen] = useState(false);
  const onHandlerCart = () => {
    setOpen(!isOpen);
  }
  return (
    <div className="container">
      <Sidebar onClose={onHandlerCart} isOpen={isOpen}>
        <h2>Item</h2>
      </Sidebar>
      <Navbar numbersOfItems={0} onHandlerCart={onHandlerCart}/>
      <Router></Router>
  
    </div>
  );
}

export default App;
