import React, {useState} from 'react';
import './styles.css';
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import { Router } from '../../Router/router';
import { ItemList } from '../../components/itemList/itemList';
import { ItemCard } from '../../components/itemCard/itemCard';

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenidos</h1>
    </div>
  );
}

export default Home;
