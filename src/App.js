import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './git-list.css';
import About  from './components/about/about';
import Search from './components/search/search';
import Cards from './components/cards/cards';
import Filter from './components/filter/filter'

const App = () => {
 

  return (
    <div className="container">
      
      <About/>     
        
      <Search/>

      <Filter/>
      
      <Cards/>

    </div>
     
  );
};

export default App;