import React from 'react';
import Form from './Form'; // Adjust the path as needed
import './App.css';
import Header from "./Header";
import Footer from './Footer';
import Titlebanner from './Title';

import Enroll from './Enroll'; // Ensure this path is correct
import Bubble from './Bubble';
import Footercontent from "./footercontent"
import Heroreplica from './Heroreplica';


const App = () => (

    <div className="App">
      <Header />
      <Titlebanner />
      <Heroreplica /> 
      <Enroll />
      <Bubble />
      <Form /> {/* This will now work correctly */}
      <Footercontent />
      <Footer />
    </div>
);

export default App
